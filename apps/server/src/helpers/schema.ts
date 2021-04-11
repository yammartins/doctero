import { Model, Schema, Mongoose } from 'mongoose';

/**
 * Register event model.
 */
const createSchemaRegister = (mongoose: Mongoose, schemas: Record<any, Schema>): Model<any> | any => {
  const registered = mongoose.modelNames();

  return (key: string) => {
    if (registered.includes(key)) {
      return mongoose.model(key);
    }

    return mongoose.model(key, schemas[key.toLowerCase()]);
  };
};

export default createSchemaRegister;
