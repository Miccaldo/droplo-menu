import { FC } from "react"
import { EmptyMenuProps } from "./empty-menu.types";
import { PlusButton } from "../../ui/plus-button/plus-button";
import { withMenuForm } from "../menu-form/with-menu-form";

const EmptyMenu: FC<EmptyMenuProps> = ({ openForm, children}) => {
    return (
        <section className="bg-faded text-center rounded-md py-6 px-4">
            <h2 className="text-slate-accent font-semibold ">Menu jest puste</h2>
            <p className="mb-6">W tym menu nie ma jeszcze żadnych linków</p>
            <PlusButton className="mx-auto" onClick={() => openForm()}>Dodaj pozycję menu</PlusButton>
            {children}
        </section>
    )
}

export default withMenuForm(EmptyMenu);