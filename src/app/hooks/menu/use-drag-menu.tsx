import { useSensors, useSensor, TouchSensor, MouseSensor, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
} from "@dnd-kit/sortable";
import { DragMenuType } from "./menu.types";
import MenuItem from "@/app/components/menu/menu-item/menu-item";

export const useDragMenu: DragMenuType = ({menu, menuLocal, setMenu, onCreateMenuItem, onDeleteMenuItem, onEditMenuItem, isMenuCreator}) => {
    const usedIds = new Set();
    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor)
      );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            setMenu((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over?.id);
                const switchedArray = items.map((item, index) => {
                    if (index === oldIndex) {
                        return { ...item, parentId: items[newIndex].parentId, level: items[newIndex].level, id: items[newIndex].id };
                    }
                    if (index === newIndex) {
                        return { ...item, parentId: items[oldIndex].parentId, level: items[oldIndex].level, id: items[oldIndex].id };
                    }
                    return item;
                });
                
                return arrayMove(switchedArray, oldIndex, newIndex);
            });
        }
    };

    const drawMenu = (currentParentId: string | null=null, menuItemNodes: React.ReactNode[]=[]) => {
        for(const menuItem of menuLocal){
            const { id, level, name, parentId, url } = menuItem;
            if(!usedIds.has(id) && parentId === currentParentId){
                menuItemNodes.push(
                    <MenuItem
                        key={id}
                        id={id} 
                        level={level} 
                        name={name} 
                        parentId={id} 
                        url={url} 
                        initMenuItem={menuItem}
                        menu={menu} 
                        menuLocal={menuLocal}
                        onCreateMenuItem={onCreateMenuItem}
                        onDeleteMenuItem={onDeleteMenuItem}
                        onEditMenuItem={onEditMenuItem}
                        isMenuCreator={isMenuCreator}
                        minLevel={Math.min(...menuLocal.map(item => item.level))}
                    />
                )
                usedIds.add(id);

                if(menuItem.level < 3){
                    drawMenu(id, menuItemNodes);
                }
            }
        }
        return (
            menuItemNodes
        )
    }

    return {
        drawMenu,
        handleDragEnd,
        sensors
    }
}