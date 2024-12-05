import { PropsWithChildren } from "react"
import { MenuItemType } from "../menu-item/menu-item.types"
import { FormikValues } from "formik"
import { FormikHelpers } from "formik"

export type MenuFormType = {
    id?: MenuItemType['id'],
    name: MenuItemType['name'],
    url?: MenuItemType['url'],
}

export type MenuFormEvents = {
    onCreateMenuItem: (menuItem: MenuFormType) => void,
    onEditMenuItem: (menuItem: Required<MenuFormType> & { id: MenuItemType['id']}) => void,
    onDeleteMenuItem: (menuItemId: string) => void
}

export type MenuFormWrappedProps = {
    openForm: (isEditing?: boolean) => void
}

type PartialMenuFormProps = {
    id?: MenuItemType['id'],
    parentId: MenuItemType['parentId'],
    isEditing?: boolean,
    initMenuItem?: MenuItemType
}

export type CustomPropsPerInput = Partial<{
    label: string,
    name: string,
    placeholder: string
}>

export type MenuFormProps = React.ComponentProps<"div"> & PartialMenuFormProps & {
    id?: MenuItemType['id'],
    title?: string,
    isMainMenu?: boolean,
    onSubmitMenuItem: (menuItem: MenuFormType) => void,
    onValidateForm?: (isValid: boolean) => void
}

export type HandleChangeFormik = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setFieldValue: FormikHelpers<FormikValues>['setFieldValue'], 
    values: MenuFormType
) => void

export type WithMenuFormType = PropsWithChildren & Partial<Omit<MenuFormEvents, 'onDeleteMenuItem'>> & Partial<PartialMenuFormProps>

export type ErrorMessageType = React.ComponentProps<"p">;