import { MenuItemType } from "@/app/components/menu/menu-item/menu-item.types"

export type CreateMenuItemPayload = Omit<MenuItemType, 'id'>
export type EditMenuItemPayload = Partial<Omit<MenuItemType, 'id'>>

export type CreateMenuItemType = (params: {payload: CreateMenuItemPayload}) => MenuItemType
export type EditMenuItemType = (params: {id: MenuItemType['id'], payload: EditMenuItemPayload}) => MenuItemType
export type UseMenuItemType = (menu: MenuItemType[]) => {
    createMenuItem: CreateMenuItemType,
    editMenuItem: EditMenuItemType
}