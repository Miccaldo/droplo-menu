import Joi from "joi";

export const validate = <T>(schema: Joi.ObjectSchema<T>) => {
    return (values: T): Partial<Record<keyof T, string>> => {
      const { error } = schema.validate(values, { abortEarly: false });
  
      if (!error) {
        return {};
      }
  
      const errors: Partial<Record<keyof T, string>> = {};
  
      error.details.forEach((detail) => {
        const field = detail.path[0] as keyof T;
        errors[field] = detail.message;
      });
  
      return errors;
    };
  };