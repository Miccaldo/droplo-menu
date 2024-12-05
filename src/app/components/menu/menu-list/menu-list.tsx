'use client'
import { FC } from "react";
import MenuItem from "../menu-item/menu-item";
import { MenuListProps } from "./menu-list.types";

export const MenuList: FC<MenuListProps> = ({menu, menuLocal, level, parentId=null, onCreateMenuItem, onEditMenuItem, onDeleteMenuItem}) => {
    const filteredMenu = menuLocal.filter(item => item.parentId === parentId);

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
              menuLocal={menuLocal}
              { ...menuItem}
              level={level}  />
          )
        })}
      </section>
    );
}