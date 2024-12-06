'use-client'
import { FC } from "react"
import { MenuItemProps } from "./menu-item.types"
import { withMenuForm } from "../menu-form/with-menu-form"
import Image from "next/image"
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable"
import { ActionsMobile } from "./actions-mobile"
import { ActionsDesktop } from "./actions-desktop"


export const MenuItem: FC<MenuItemProps> = ({id, name, url, openForm, onDeleteMenuItem, menu, minLevel, children, level}) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const limitedLevel = level - minLevel;
    const offset = 50 * limitedLevel;

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        marginLeft: `${offset}px`
    };
    
    const handleDeleteItem = () => {
        onDeleteMenuItem(id);
    }

    const menuIncludesMenuItem = () => {
        return menu.some(item => item.id === id);
    }

    return (
        <div className='bg-faded menu-item cursor-auto' ref={setNodeRef} style={style} {...attributes} >
            <div className="px-6 py-4 flex justify-between items-center bg-white shadow-border">
                <div className="flex gap-x-3">
                    <Image className="cursor-grab" src='/images/icons/drag.svg' alt="Plus icon" width={17} height={17} {...listeners}/>
                    <div className="text-sm">
                        <h3 className="leading-5 mb-2">{name}</h3>
                        <div className="ledaing-5">{url}</div>
                    </div>
                </div>

                <ActionsDesktop 
                    id={id}
                    handleDeleteItem={handleDeleteItem}
                    menuIncludesMenuItem={menuIncludesMenuItem()}
                    openForm={openForm}
                />
                <ActionsMobile 
                    id={id}
                    handleDeleteItem={handleDeleteItem}
                    menuIncludesMenuItem={menuIncludesMenuItem()}
                    openForm={openForm}
                />
            </div>

            <div className="border-t">
                {children}
            </div>
        </div>
    )
}

export default withMenuForm(MenuItem);