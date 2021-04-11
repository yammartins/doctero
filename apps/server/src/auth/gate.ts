import { Document } from 'mongoose';

import Forbidden from './forbidden';
import {
  Gates,
  Policy,
  Ability,
  Authorize,
} from './types';

/**
 * Get collection name from model.
 */
const getName = (model: Document) => model ? model.collection.collectionName : 'default';

/**
 * Create a new gate instance.
 */
export default (gates: Record<any, any> = {}): Gates => {
  /**
   * Authorization gates.
   */
  const _gates = gates;

  /**
   * Authorization function.
   *
   * @param {Object} user - User object (decoded JWT token probably).
   * @param {String} method - The autorization action (create, update, etc).
   * @param {Object} model - Mongoose model.
   * @param {...any} args - Additional arguments.
   */
  const authorize: Authorize = (user, method, model, ...args) => {
    if (model === null) {
      throw new Error('Model can not be null');
    }

    const name = getName(model);
    const gate = _gates[name];

    if (! gate) {
      throw new Error(`Gate not defined for model "${name}"`);
    }

    const action = gate[method];

    if (! action) {
      throw new Error(`Action "${method}" not defined in Models "${name}" Gate`);
    }

    if (! action(user, model, ...args)) {
      throw new Forbidden();
    }
  };

  /**
   * Add a new policy on this gate.
   *
   * @param {Object} model - Mongoose model.
   * @param {Object<Function>} actions - Actions object.
   */
  const policy: Policy = (model, actions) => {
    const name = getName(model);

    /**
     * Check if gate is already registered.
     */
    if (_gates[name]) {
      throw new Error(`Gate for model "${name}" already registered`);
    }

    /**
     * Check if every action is a function.
     */
    if (Object.values(actions).filter((action) => typeof action !== 'function').length) {
      throw new Error(`Wrong action type when registering Gate "${name}"`);
    }

    _gates[name] = actions;
  };

  /**
   * Add a new ability to a policy or create it.
   */
  const ability: Ability = (action, callback, model) => {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback should be a function');
    }

    const name = getName(model);

    if (! _gates[name]) {
      _gates[name] = {};
    }

    const gate = _gates[name];

    if (gate[action]) {
      throw new Error('You can not override gates');
    }

    gate[action] = callback;
  };

  return {
    policy,
    ability,
    authorize,
  };
};
