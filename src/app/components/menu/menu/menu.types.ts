import { MenuItemType } from "../menu-item/menu-item.types"
import { MenuFormEvents } from "../menu-form/menu-form.types";
import { MenuFormWrappedProps } from "../menu-form/menu-form.types";

export type WithMenuPropsType = MenuFormEvents & MenuFormWrappedProps & {
    menu: MenuItemType[]
};

export type MenuProps = React.ComponentProps<"div"> & WithMenuPropsType