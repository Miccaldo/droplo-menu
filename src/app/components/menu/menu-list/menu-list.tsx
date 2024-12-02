'use client'
import { FC } from "react";
import MenuItem from "../menu-item/menu-item";
import { MenuListProps } from "./menu-list.types";

export const MenuList: FC<MenuListProps> = ({menu, parentId=null, onCreateMenuItem, onEditMenuItem, onDeleteMenuItem}) => {
    const filteredMenu = menu.filter(item => item.parentId === parentId);
    return (
      <section>
        {filteredMenu.map(menuItem => {
          return (
            <MenuItem
              key={menuItem.id} 
              initMenuItem={menuItem} 
              parentId={menuItem.id}
              onCreateMenuItem={onCreateMenuItem}
              onEditMenuItem={onEditMenuItem}
              onDeleteMenuItem={onDeleteMenuItem}
              menu={menu}
              { ...menuItem}  />
          )
        })}
      </section>
    );
}