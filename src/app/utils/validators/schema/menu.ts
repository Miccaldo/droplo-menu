import { JSONSchemaWithErrors } from "../validate.types";
import { MenuFormSchemaType } from "../validate.types";
import { MenuFormType } from "@/app/components/menu/menu-form/menu-form.types";
import Joi from "joi";

export const menuFormSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().messages({
        'string.base': 'Nazwa musi być ciągiem znaków',
        'string.empty': 'Nazwa jest wymagana'
    }),
    url: Joi.string().uri().allow(null, '').optional().messages({
        'string.base': 'URL musi być ciągiem znaków',
        'string.uri': 'URL musi być poprawnym adresem URL'
    })
});