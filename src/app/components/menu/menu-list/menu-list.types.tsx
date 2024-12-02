import { MenuItemType } from "../menu-item/menu-item.types"
import { MenuFormEvents } from "../menu-form/menu-form.types"

export type MenuListProps = React.ComponentProps<"section"> & MenuFormEvents & {
    menu: MenuItemType[],
    parentId?: MenuItemType['parentId']
}