import { useState } from "react";
import { MenuItemType } from "../../components/menu/menu-item/menu-item.types";

export const useMenuList = () => {
    const [menu, setMenu] = useState<MenuItemType[]>([]);

    const handleCreateMenuItem = (menuItem: MenuItemType) => {
      setMenu([...menu, menuItem])
    }

    const handleEditMenuItem = (menuItem: MenuItemType) => {
      const currentMenuItemIndex = menu.findIndex(item => item.id === menuItem.id);
      if(currentMenuItemIndex !== -1){
        menu[currentMenuItemIndex] = menuItem;
        setMenu([...menu]);
      }
    }

    const handleDeleteMenuItem = (menuItemId: string) => {
      const currentMenuItemIndex = menu.findIndex(item => item.id === menuItemId);
      if(currentMenuItemIndex !== -1){
        menu.splice(currentMenuItemIndex, 1);
        setMenu([...menu]);
      }
    }

    return {
        menu,
        handleCreateMenuItem,
        handleEditMenuItem,
        handleDeleteMenuItem
    }
}