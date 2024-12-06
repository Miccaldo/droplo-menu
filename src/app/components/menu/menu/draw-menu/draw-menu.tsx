import { FC } from "react"
import { DrawMenuType } from "./draw-menu.types"
import { DndContext, closestCenter} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDragMenu } from "@/app/hooks/menu/use-drag-menu";

export const DrawMenu: FC<DrawMenuType> = ({menu, menuLocal, minLevel, setMenu, parentId, onCreateMenuItem, onDeleteMenuItem, onEditMenuItem, isMenuCreator}) => {
 
    const { drawMenu, handleDragEnd, sensors } = useDragMenu({menu, menuLocal, minLevel, setMenu, parentId, onCreateMenuItem, onDeleteMenuItem, onEditMenuItem, isMenuCreator});

    return (
        <div>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} sensors={sensors}>
                <SortableContext items={menuLocal} strategy={verticalListSortingStrategy}>
                    {drawMenu(parentId)}
                </SortableContext>
            </DndContext>
        </div>
    )
}