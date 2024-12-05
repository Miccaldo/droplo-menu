'use client';
import { createContext, FC, useContext } from "react"
import { MenuProviderProps, WithMenuPropsType } from "./menu.types";
import { useMenuList } from "@/app/hooks/menu/use-menu-list";
import { MenuContextType } from "./menu.types";

const initContextValues: MenuContextType = {
    menu: [],
    appendMenuItem: () => {},
    removeMenuItem: () => {},
    updateMenuItem: () => {}
}
const MenuContext = createContext<MenuContextType>(initContextValues);

export const MenuProvider: FC<MenuProviderProps> = ({children}) => {
    const { menu, appendMenuItem, updateMenuItem, removeMenuItem } = useMenuList();
    return (
        <MenuContext.Provider value={{
                                        menu, 
                                        appendMenuItem,
                                        updateMenuItem,
                                        removeMenuItem
                                    }}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if(!context){
        throw new Error('useMenu must be used within MenuProvider');
    }
    return context;
}