import { FC } from "react"
import { ActionsDesktopType } from "./menu-item.types"
import { Button } from "../../ui/button/button"
import { useRouter } from "next/navigation"
import { routing } from "@/app/routing/routing"

export const ActionsDesktop: FC<ActionsDesktopType> = ({id, handleDeleteItem, openForm, menuIncludesMenuItem}) => {
    const router = useRouter();
    return (
        <div className="hidden md:block">
            <Button className="rounded-r-none" variant="secondary" onClick={handleDeleteItem}>Usuń</Button>
            <Button className="rounded-r-none rounded-l-none" variant="secondary" onClick={() => openForm && openForm(true)}>Edytuj</Button>
            <Button className="rounded-l-none" variant="secondary" onClick={(e) =>{
                router.push(`${routing["/dashboard/menu/create"]}/${id}`)
            } } disabled={!menuIncludesMenuItem}>Dodaj pozycję menu</Button>
        </div>
    )
}