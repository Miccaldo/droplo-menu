import { MenuFormEvents } from "../../menu-form/menu-form.types"
import { MenuItemType } from "../../menu-item/menu-item.types"

export type DrawMenuType = React.ComponentProps<"div"> & {
    parentId?: string | null,
    menu: MenuItemType[],
    menuLocal: MenuItemType[],
    setMenu: React.Dispatch<React.SetStateAction<MenuItemType[]>>,
    isMenuCreator?: boolean
} & MenuFormEvents