import { ComponentType, FC, useState} from "react";
import { WithMenuFormType } from "./menu-form.types";
import { MenuForm } from "./menu-form";
import { Button } from "../../ui/button/button";
import { MenuFormType } from "./menu-form.types";

export const withMenuForm = <T extends object>(
    WrappedComponent: ComponentType<T>
): FC<WithMenuFormType & Omit<T, 'openForm'>> => {
    const ComponentWithMenuForm: FC<WithMenuFormType & Omit<T, 'openForm'>> = (props) => {
        const [opened, setOpened] = useState(false);
        const [isEditing, setEditing] = useState(false);
        const [ isValidForm, setIsValidForm] = useState(false);
        
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
                    <div className="px-6 py-4">
                    <MenuForm
                        id={props.id}
                        parentId={props.parentId}
                        initMenuItem={props.initMenuItem}
                        onValidateForm={(isValid) => { setIsValidForm(isValid) }}
                        onSubmitMenuItem={(menuItem) => {
                            if (!isEditing) {
                                props.onCreateMenuItem?.(menuItem);
                            } else {
                                props.onEditMenuItem?.(menuItem as Required<MenuFormType>);
                            }
                            setOpened(false);
                            setEditing(false);
                        }}
                        isEditing={isEditing}
                    >
                        <MenuForm.Actions>
                            <Button className="mt-5 mr-2" variant="secondary" onClick={() => {
                                setOpened(false);
                                setEditing(false);
                            }}>Anuluj</Button>
                            <Button variant="tertiary" type="submit" disabled={!isValidForm}>Dodaj</Button>
                        </MenuForm.Actions>
                    </MenuForm>
                    </div>
                    
                )}
            </WrappedComponent>
        );
    };

    ComponentWithMenuForm.displayName = `withMenuForm(${WrappedComponent.displayName || WrappedComponent.name})`;

    return ComponentWithMenuForm;
};