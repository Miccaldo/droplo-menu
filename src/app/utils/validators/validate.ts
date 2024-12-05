import Ajv from "ajv";
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';
import { JSONSchemaWithErrors, JSONSchemaErrorResponse } from "./validate.types";
import { FormikValues } from "formik";
import Joi from "joi";

const ajv = new Ajv({allErrors: true, useDefaults: true});
addFormats(ajv);
ajvErrors(ajv);

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