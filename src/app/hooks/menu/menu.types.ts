import { MenuItemType } from "@/app/components/menu/menu-item/menu-item.types"
import { MenuFormEvents } from "@/app/components/menu/menu-form/menu-form.types"
import { DragEndEvent } from "@dnd-kit/core"
import { SensorDescriptor } from "@dnd-kit/core"
import { ReactNode } from "react"

export type CreateMenuItemPayload = Omit<MenuItemType, 'id'>
export type EditMenuItemPayload = Partial<Omit<MenuItemType, 'id'>>

export type CreateMenuItemType = (params: {payload: CreateMenuItemPayload}) => MenuItemType
export type EditMenuItemType = (params: {id: MenuItemType['id'], payload: EditMenuItemPayload}) => MenuItemType
export type UseMenuItemType = (menu: MenuItemType[]) => {
    createMenuItem: CreateMenuItemType,
    editMenuItem: EditMenuItemType
}

export type DragMenuProps = React.ComponentProps<"div"> & {
    parentId?: string | null,
    menu: MenuItemType[],
    menuLocal: MenuItemType[],
    setMenu: React.Dispatch<React.SetStateAction<MenuItemType[]>>,
    isMenuCreator?: boolean
} & MenuFormEvents

export type DragMenuType = (params: DragMenuProps) => {
    drawMenu: (currentParentId?: string | null, menuItemNodes?: ReactNode[]) => ReactNode[];
    handleDragEnd: (event: DragEndEvent) => void;
    sensors: SensorDescriptor<any>[];
}