import { ComponentType, FC, useState} from "react";
import { WithMenuFormType } from "./menu-form.types";
import { MenuForm } from "./menu-form";
import { MenuItemType } from "../menu-item/menu-item.types";

export const withMenuForm = <T extends object>(
    WrappedComponent: ComponentType<T>
): FC<WithMenuFormType & Omit<T, 'openForm'>> => {
    const ComponentWithMenuForm: FC<WithMenuFormType & Omit<T, 'openForm'>> = (props) => {
        const [opened, setOpened] = useState(false);
        const [isEditing, setEditing] = useState(false);

        return (
            <WrappedComponent
                {...(props as T)}
                openForm={(isEditing: boolean = false) => {
                    setOpened(!opened);
                    setEditing(isEditing);
                }}
            >
                {props.children}
                {opened && (
                    <MenuForm
                        parentId={props.parentId}
                        initMenuItem={props.initMenuItem}
                        onSubmitMenuItem={(menuItem) => {
                            if (!isEditing) {
                                props.onCreateMenuItem?.(menuItem);
                            } else {
                                props.onEditMenuItem?.(menuItem as Required<MenuItemType>);
                            }
                            setOpened(false);
                            setEditing(false);
                        }}
                        onBack={() => {
                            setOpened(false);
                            setEditing(false);
                        }}
                        isEditing={isEditing}
                    />
                )}
            </WrappedComponent>
        );
    };

    ComponentWithMenuForm.displayName = `withMenuForm(${WrappedComponent.displayName || WrappedComponent.name})`;

    return ComponentWithMenuForm;
};