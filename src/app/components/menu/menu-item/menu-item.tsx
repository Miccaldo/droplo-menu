'use-client'
import { FC } from "react"
import { MenuItemProps } from "./menu-item.types"
import { Button } from "../../ui/button/button"
import { withMenuForm } from "../menu-form/with-menu-form"
import {MenuList} from "../menu-list/menu-list"

export const MenuItem: FC<MenuItemProps> = ({id, name, url, openForm, onCreateMenuItem, onEditMenuItem, onDeleteMenuItem, menu, children}) => {

    const handleDeleteItem = () => {
        onDeleteMenuItem(id);
    }

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h3>{name}</h3>
                    <div>{url}</div>
                </div>

                <div>
                    <Button className="rounded-r-none" variant="secondary" onClick={handleDeleteItem}>Usuń</Button>
                    <Button className="rounded-r-none rounded-l-none" variant="secondary" onClick={() => openForm(true)}>Edytuj</Button>
                    <Button className="rounded-l-none" variant="secondary" onClick={() => openForm(false)}>Dodaj pozycję menu</Button>
                </div>
            </div>

            <div>
                <MenuList menu={menu} parentId={id} onCreateMenuItem={onCreateMenuItem} onEditMenuItem={onEditMenuItem} onDeleteMenuItem={onDeleteMenuItem}/>
            </div>
            {children}
        </div>
    )
}

export default withMenuForm(MenuItem);