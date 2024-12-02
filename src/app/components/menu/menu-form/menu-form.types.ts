import { PropsWithChildren } from "react"
import { MenuItemType } from "../menu-item/menu-item.types"

export type MenuFormEvents = {
    onCreateMenuItem: (menuItem: MenuItemType) => void,
    onEditMenuItem: (menuItem: Required<MenuItemType>) => void,
    onDeleteMenuItem: (menuItemId: string) => void
}

export type MenuFormWrappedProps = {
    openForm: (isEditing?: boolean) => void
}

type PartialMenuFormProps = {
    parentId: MenuItemType['parentId'],
    isEditing?: boolean,
    initMenuItem?: MenuItemType
}

export type MenuFormProps = React.ComponentProps<"div"> & PartialMenuFormProps & {
    onSubmitMenuItem: (menuItem: MenuItemType) => void,
    onBack: () => void
}

export type WithMenuFormType = PropsWithChildren & Partial<Omit<MenuFormEvents, 'onDeleteMenuItem'>> & Partial<PartialMenuFormProps>