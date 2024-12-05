import { JSONSchemaType } from "ajv";
import { MenuItemType } from "@/app/components/menu/menu-item/menu-item.types";

export type JSONSchemaWithErrors<T> = JSONSchemaType<T> & { errorMessage?: {
    required?: Partial<Record<keyof T, string>>;
} };

export type JSONSchemaErrorResponse = {
    isValid: boolean,
    errors: { [fieldName: string]: string }
}

export type MenuFormSchemaType = {
    name: MenuItemType['name'],
    url: MenuItemType['url']
}