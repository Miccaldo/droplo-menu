import { useMenuContext } from "@/app/components/menu/menu/menu-provider";
import { CreateMenuItemPayload, CreateMenuItemType, EditMenuItemType, UseMenuItemType } from "./menu.types";
import { randomId } from "@/app/utils/random-id";
import { MenuItemType } from "@/app/components/menu/menu-item/menu-item.types";

export const useMenuItem: UseMenuItemType = (menu) => {
    //const { menu, appendMenuItem, removeMenuItem, updateMenuItem } = useMenuContext();
    
    const createMenuItem: CreateMenuItemType = ({payload}) => {
        const id = randomId(6);
        const parentId = payload.parentId ? payload.parentId : null;
        const newMenuItem: MenuItemType = { id, ...payload, parentId};
        return newMenuItem;
    }

    const editMenuItem: EditMenuItemType = ({id, payload}) => {
        let currentMenuItem = menu.find(item => item.id === id);

        if(currentMenuItem){
            currentMenuItem = { ...currentMenuItem, ...payload};
            
        }else{
            throw new Error('Not found item with id ' + id);
        }

        return currentMenuItem;
    }

    return {
        createMenuItem,
        editMenuItem
    }
}