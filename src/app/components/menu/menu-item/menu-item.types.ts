import { MenuFormEvents } from "../menu-form/menu-form.types";
import { MenuFormWrappedProps } from "../menu-form/menu-form.types";

export type MenuItemType = {
    id: string,
    name: string,
    url?: string,
    parentId?: string | null
}

export type MenuItemProps = React.ComponentProps<"div"> & MenuItemType & MenuFormEvents & MenuFormWrappedProps & {
    menu: MenuItemType[]
};