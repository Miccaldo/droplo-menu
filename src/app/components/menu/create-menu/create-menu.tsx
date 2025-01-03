'use client'
import { CreateMenuProps } from "./create-menu.types"
import { FC, useState } from "react"
import { MenuForm } from "../menu-form/menu-form"
import { Button } from "../../ui/button/button"
import { notFound } from 'next/navigation';
import Link from "next/link"
import Image from "next/image"
import {MenuWithForm} from "../menu/menu"
import { useCreateMenu } from "@/app/hooks/menu/use-create-menu"
import { routing } from "@/app/routing/routing"


export const CreateMenu: FC<CreateMenuProps> = ({menuId}) => {
    
    const {
        handleCreateChildMenu,
        handleEditChildMenu,
        handleDeleteChildMenu,
        handleSubmitMenuItem,
        handleBack,
        currentMenuItem,
        menu,
        menuChildren,
        setMenuChildren
    } = useCreateMenu(menuId);
    const [ isValidForm, setIsValidForm] = useState(false);

    if(menuId && !currentMenuItem){
        return notFound();
    }

    return (
        <div className="relative bg-faded pb-20 py-5 px-6 border rounded-md mt-6">
            <section className="mb-6">
                <Link className="flex gap-x-4 w-fit text-sm font-semibold transition-colors hover:text-text-accent" href={routing['/dashboard/menu']}>
                    <Image src='/images/icons/arrow-left.svg' alt="Plus icon" width={17} height={17}/>
                    <span>Wróć do listy nawigacji</span>
                </Link>
                <h1 className="text-2xl py-5">Dodaj nawigację</h1>
                <MenuForm
                    title="Nazwa"
                    initMenuItem={currentMenuItem}
                    parentId={null}
                    onSubmitMenuItem={handleSubmitMenuItem}
                    isEditing={false}
                    onValidateForm={(isValid) => { setIsValidForm(isValid)} }
                    isMainMenu={true}
                >
                    <MenuForm.Actions>
                        <div className="absolute bottom-5 right-5">
                            <Button className="mt-5 mr-2" variant="secondary" onClick={handleBack} type="button">Anuluj</Button>
                            <Button variant="tertiary" type="submit" disabled={!isValidForm}>Zapisz</Button>
                        </div>
                    </MenuForm.Actions>
                </MenuForm>
            </section>
            <section className="bg-white rounded-md px-6 py-5 border">
                <h2 className="mb-4">Pozycje menu</h2>
                <MenuWithForm
                        setMenu={setMenuChildren}
                        menu={menu}
                        menuLocal={menuChildren}
                        parentId={menuId ? menuId : null}
                        onCreateMenuItem={handleCreateChildMenu} 
                        onDeleteMenuItem={handleDeleteChildMenu} 
                        onEditMenuItem={handleEditChildMenu}
                        isMenuCreator={true}
                />
            </section>
        </div>
    )
}