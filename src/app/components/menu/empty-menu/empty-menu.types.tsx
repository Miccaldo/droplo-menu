import { MenuFormWrappedProps } from "../menu-form/menu-form.types";
import { MenuFormEvents } from "../menu-form/menu-form.types";

export type EmptyMenuProps = React.ComponentProps<"section"> & MenuFormEvents & MenuFormWrappedProps & {
    onClick?: () => void,
    disabled?: boolean
}