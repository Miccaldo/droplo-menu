import { MenuItemType } from "../menu-item/menu-item.types"
import { MenuFormEvents } from "../menu-form/menu-form.types";
import { MenuFormWrappedProps } from "../menu-form/menu-form.types";
import { MenuFormType } from "../menu-form/menu-form.types";

export type WithMenuPropsType = MenuFormEvents & MenuFormWrappedProps & {
    menu: MenuItemType[]
    menuLocal: MenuItemType[]
};

export type MenuProps = React.ComponentProps<"div"> & WithMenuPropsType & {
    parentId?: string | null,
    onAddMenuItem?: () => void
}
export type MenuProviderProps = React.ComponentProps<"div">
export type MenuContextType = { 
    menu: MenuItemType[],
    appendMenuItem: (menuItem: MenuItemType) => void 
    removeMenuItem: MenuFormEvents['onDeleteMenuItem'], 
    updateMenuItem: (menuItem: MenuItemType) => void , 
 }