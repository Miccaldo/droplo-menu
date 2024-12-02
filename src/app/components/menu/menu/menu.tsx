'use client'
import {MenuList} from "../menu-list/menu-list"
import EmptyMenu from "../empty-menu/empty-menu"
import { Button } from "../../ui/button/button"
import { withMenuForm } from "../menu-form/with-menu-form"
import { withMenuProps } from "./with-menu-props"
import { FC } from "react"
import { MenuProps } from "./menu.types"

export const Menu: FC<MenuProps> = ({openForm, menu, onCreateMenuItem, onDeleteMenuItem, onEditMenuItem, children}) => {
    return menu.length > 0 ? 
        <div>
            <MenuList menu={menu} onCreateMenuItem={onCreateMenuItem} onDeleteMenuItem={onDeleteMenuItem} onEditMenuItem={onEditMenuItem} /> 
            {children}
            <Button variant="secondary" onClick={() => openForm(false)}>Dodaj pozycję menu</Button>
        </div> 
        : <EmptyMenu onCreateMenuItem={onCreateMenuItem} />
}

export default withMenuProps(withMenuForm(Menu));