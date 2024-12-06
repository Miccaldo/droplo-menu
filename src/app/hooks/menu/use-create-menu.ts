'use client'
import { useState } from "react";
import { MenuItemType } from "@/app/components/menu/menu-item/menu-item.types";
import { CreateMenuItemPayload } from "./menu.types";
import { MenuFormType } from "@/app/components/menu/menu-form/menu-form.types";
import { useRouter } from "next/navigation";
import { useMenuItem } from "./use-menu-item";
import { useMenuContext } from "@/app/components/menu/menu/menu-provider";
import { routing } from "@/app/routing/routing";

export const useCreateMenu = (menuId?: string) => {
    const router = useRouter();
    const { menu, appendMenuItem, updateMenuItem, setMenu } = useMenuContext();

    const currentMenuItem = menu.find(item => item.id === menuId);

    const menuIds = new Set(menu.map(item => item.id));

    const filteredChildrenMenu = [...menu.filter(item => (item.parentId !== null && item.id !== menuId))];
    const [ menuChildren, setMenuChildren ] = useState<MenuItemType[]>(filteredChildrenMenu);
    const { createMenuItem, editMenuItem } = useMenuItem([...menuChildren, ...menu]);

    const handleCreateChildMenu = (menuItem: MenuFormType) => {
        const payload: CreateMenuItemPayload = { ...menuItem, level: 0};
        if(currentMenuItem){
            payload.parentId = currentMenuItem.id;
            payload.level = currentMenuItem.level + 1
        }
        const createdChildMenuItem = createMenuItem({ payload });
        setMenuChildren([...menuChildren, createdChildMenuItem]);
    }

    const handleEditChildMenu = (menuItem: Required<MenuFormType> & { id: MenuItemType['id']}) => {
        const editedChildMenuItem = editMenuItem({ id: menuItem.id, payload: { ...menuItem}});
        const currentChildMenuItemIndex = menuChildren.findIndex(item => item.id === editedChildMenuItem.id);
        if(currentChildMenuItemIndex !== -1){
            menuChildren[currentChildMenuItemIndex] = { ...menuChildren[currentChildMenuItemIndex], ...editedChildMenuItem}
            setMenuChildren([...menuChildren]);
        }
    }

    const handleDeleteChildMenu = (menuItemId: string) => {
        const currentMenuItemIndex = menuChildren.findIndex(item => item.id === menuItemId);
        if(currentMenuItemIndex !== -1){
            menuChildren.splice(currentMenuItemIndex, 1);
            setMenuChildren([...menuChildren]);
        }
    }

    const handleSubmitMenuItem = (menuItem: MenuFormType) => {
        if(!currentMenuItem){
            const createdMenuItem = createMenuItem({ payload: { ...menuItem, level: 0}});
            appendMenuItem(createdMenuItem);
            const childrenToCreate = menuChildren.filter(childMenu => !menuIds.has(childMenu.id));
            childrenToCreate.forEach(menuChild => {
                menuChild.parentId = createdMenuItem.id;
                menuChild.level = menuChild.level + 1;
                appendMenuItem(menuChild);
            });
        }else{
            const editedMenuItem = editMenuItem({ id: currentMenuItem.id, payload: { ...menuItem}});
            updateMenuItem(editedMenuItem);
            menuChildren.forEach(menuChild => {
                updateMenuItem(menuChild);
            });
            const childrenToCreate = menuChildren.filter(childMenu => !menuIds.has(childMenu.id));
            childrenToCreate.forEach(menuChild => {
                appendMenuItem(menuChild);
            })
        }
    
        router.push(routing["/dashboard/menu"])
    }

    const handleBack = () => {
        router.push(routing["/dashboard/menu"]);
    }

    return {
        handleCreateChildMenu,
        handleEditChildMenu,
        handleDeleteChildMenu,
        handleSubmitMenuItem,
        handleBack,
        currentMenuItem,
        menu,
        menuChildren,
        setMenu,
        setMenuChildren
    }
}