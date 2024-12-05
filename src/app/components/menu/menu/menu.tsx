'use client'
import {MenuList} from "../menu-list/menu-list"
import EmptyMenu from "../empty-menu/empty-menu"
import { Button } from "../../ui/button/button"
import { withMenuForm } from "../menu-form/with-menu-form"
import { withMenuProps } from "./with-menu-props"
import { FC } from "react"
import { MenuProps } from "./menu.types"

export const Menu: FC<MenuProps> = ({parentId, openForm, menu, menuLocal, onCreateMenuItem, onDeleteMenuItem, onEditMenuItem, onAddMenuItem, children}) => {

    const extraProps = onAddMenuItem ? { onClick: () => { onAddMenuItem(); }} : {};
    const filteredMenu = menuLocal.filter(item => item.parentId === parentId);
    return filteredMenu.length > 0 ? 
        <div className="rounded-md border border-border-primary bg-faded">
            <MenuList parentId={parentId} menu={menu} menuLocal={menuLocal} level={0} onCreateMenuItem={onCreateMenuItem} onDeleteMenuItem={onDeleteMenuItem} onEditMenuItem={onEditMenuItem} /> 
            <div className="">
                {children}
            </div>
            <div className="py-5 px-6 bg-footer-ui rounded-md">
                <Button variant="secondary" onClick={() =>{
                    if(onAddMenuItem){
                        onAddMenuItem();
                    }else{
                        openForm(false);
                    }
                }}>Dodaj pozycję menu</Button>
            </div>
        </div> 
        : <EmptyMenu 
            onCreateMenuItem={onCreateMenuItem} 
            onEditMenuItem={onEditMenuItem} 
            onDeleteMenuItem={onDeleteMenuItem} 
            { ...extraProps}
             />
}

export const MenuWithForm = withMenuForm(Menu);

export default withMenuProps(withMenuForm(Menu));