import { FC } from "react";
import { PlusButtonProps } from "./plus-button.types";
import { Button } from "../button/button";
import Image from "next/image";

export const PlusButton: FC<PlusButtonProps> = ({ className, children }) => {
    return (
        <Button variant="primary" className={`flex items-center gap-x-2 ${className}`}>
            <Image src='/images/icons/plus-rounded.svg' alt="Plus icon" width={17} height={17}/>
            {children}
        </Button>
    )
}