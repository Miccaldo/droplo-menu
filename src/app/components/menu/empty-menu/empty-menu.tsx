import { FC } from "react"
import { EmptyMenuProps } from "./empty-menu.types";
import { PlusButton } from "../../ui/plus-button/plus-button";
import { withMenuForm } from "../menu-form/with-menu-form";

export const EmptyMenu: FC<EmptyMenuProps> = ({ openForm, onClick, disabled, children }) => {
    return (
        <section>
            <div className="text-center rounded-md py-6 px-4 bg-faded border border-border-secondary">
                <h2 className="text-text-accent font-semibold ">Menu jest puste</h2>
                <p className="mb-6">W tym menu nie ma jeszcze żadnych linków</p>
                <PlusButton className="mx-auto" disabled={disabled} onClick={() => onClick ? onClick() : openForm()}>Dodaj pozycję menu</PlusButton>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}

export default withMenuForm(EmptyMenu);