'use-client'
import { FC } from "react"
import { MenuItemProps } from "./menu-item.types"
import { Button } from "../../ui/button/button"
import { withMenuForm } from "../menu-form/with-menu-form"
import Image from "next/image"
import {MenuList} from "../menu-list/menu-list"
import { useRouter } from "next/navigation"
import { routing } from "@/app/routing/routing"

export const MenuItem: FC<MenuItemProps> = ({id, name, url, openForm, onCreateMenuItem, onEditMenuItem, onDeleteMenuItem, menu, menuLocal, children, level}) => {

    const router = useRouter();
    
    const handleDeleteItem = () => {
        onDeleteMenuItem(id);
    }

    const menuIncludesMenuItem = () => {
        return menu.some(item => item.id === id);
    }

    return (
        <div className={`bg-faded ${level > 0 ? 'ml-[50px]' : ''}`}>
            <div className="px-6 py-4 flex justify-between items-center bg-white">
                <div className="flex gap-x-3">
                    <Image src='/images/icons/drag.svg' alt="Plus icon" width={17} height={17}/>
                    <div className="text-sm">
                        <h3 className="leading-5 mb-2">{name}</h3>
                        <div className="ledaing-5">{url}</div>
                    </div>
                </div>

                <div>
                    <Button className="rounded-r-none" variant="secondary" onClick={handleDeleteItem}>Usuń</Button>
                    <Button className="rounded-r-none rounded-l-none" variant="secondary" onClick={() => openForm(true)}>Edytuj</Button>
                    <Button className="rounded-l-none" variant="secondary" onClick={() => router.push(`${routing["/dashboard/menu/create"]}/${id}`)} disabled={!menuIncludesMenuItem()}>Dodaj pozycję menu</Button>
                </div>
            </div>

            <div className="border-t">
                {children}
            </div>

            <div>
                <MenuList menu={menu} menuLocal={menuLocal} level={level + 1} parentId={id} onCreateMenuItem={onCreateMenuItem} onEditMenuItem={onEditMenuItem} onDeleteMenuItem={onDeleteMenuItem}/>
            </div>
        </div>
    )
}

export default withMenuForm(MenuItem);