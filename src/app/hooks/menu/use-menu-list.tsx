import { useState } from "react";
import { MenuItemType } from "../../components/menu/menu-item/menu-item.types";
import { MenuFormType } from "@/app/components/menu/menu-form/menu-form.types";

export const useMenuList = () => {
    const [menu, setMenu] = useState<MenuItemType[]>([]);

    const appendMenuItem = (menuItem: MenuItemType) => {
      setMenu(prevState => [...prevState, menuItem])
    }

    const updateMenuItem = (menuItem: MenuItemType) => {
      const currentMenuItemIndex = menu.findIndex(item => item.id === menuItem.id);
      if(currentMenuItemIndex !== -1){
        menu[currentMenuItemIndex] = menuItem;
        setMenu(() => [...menu]);
      }
    }

    const removeMenuItem = (menuItemId: string) => {
      const currentMenuItemIndex = menu.findIndex(item => item.id === menuItemId);
      if(currentMenuItemIndex !== -1){
        menu.splice(currentMenuItemIndex, 1);
        setMenu([...menu]);
      }
    }

    return {
        menu,
        appendMenuItem,
        updateMenuItem,
        removeMenuItem
    }
}