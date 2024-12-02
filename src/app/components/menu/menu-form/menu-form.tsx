'use client';
import { FC} from "react"
import { MenuFormProps } from "./menu-form.types"
import { MenuItemType } from "../menu-item/menu-item.types";
import { Formik, Form, Field } from 'formik';
import { Button } from "../../ui/button/button";
import { randomId } from "@/app/utils/random-id";

export const MenuForm: FC<MenuFormProps> = ({parentId, initMenuItem, onSubmitMenuItem, onBack, isEditing}) => {
    const initialValues: Omit<MenuItemType, 'id'> & Partial<Pick<MenuItemType, 'id'>> = (initMenuItem && isEditing) ? { ...initMenuItem} : { name: '', url: '' }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values,) => {
                    const id = (isEditing && values.id) ? values.id : randomId(6);
                    parentId = initMenuItem ? initMenuItem.id : null;
                    const newMenuItem: MenuItemType = { ...values, id, parentId};
                    onSubmitMenuItem(newMenuItem);
                }}
            >
                <Form>
                    <label htmlFor="name">Nazwa</label>
                    <Field className='block' id="name" name="name" placeholder="np. Promocje" />
                    <label htmlFor="url">Link</label>
                    <Field className='block' id="url" name="url" placeholder="Wklej lub wyszukaj" />
                    <Button variant="secondary" onClick={onBack}>Anuluj</Button>
                    <Button variant="tertiary" type="submit">Dodaj</Button>
                </Form>
            </Formik>
        </div>
    )
}
    
    