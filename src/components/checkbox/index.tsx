import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { CheckboxProps } from './types';
import { Text } from '~/components';

const Checkbox: React.FC<CheckboxProps> = ({
  label, name, value, ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);

  const defaultChecked = defaultValue === value;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,

      getValue: (ref) => ref.checked,

      clearValue: (ref, data) => {
        ref.checked = data; // eslint-disable-line
      },

      setValue: (ref, data) => {
        ref.checked = data || defaultChecked; // eslint-disable-line
      },
    });
  }, [defaultValue, fieldName, registerField, defaultChecked]);

  return (
    <div className="checkbox">
      <div className="checkbox-wrapper">
        <input
          {...rest}
          ref={inputRef}
          defaultValue={defaultValue}
          value={value}
          type="checkbox"
          id={fieldName}
        />

        <div className="checkbox-wrapper-button">
          <span />
        </div>

        <Text label={label} size="sm" className="text-gray-500" />
      </div>

      {error && (
      <Text
        type="span"
        size="sm"
        weight="medium"
        className="checkbox-error"
      >
        {error}
      </Text>
      )}
    </div>
  );
};

export default Checkbox;
