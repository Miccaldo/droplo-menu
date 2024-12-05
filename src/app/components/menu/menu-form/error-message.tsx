import { FC } from "react"
import { ErrorMessageType } from "./menu-form.types"

export const ErrorMessage: FC<ErrorMessageType> = ({ children }) => {
    return (
        <p className="text-red-500 text-sm mb-1">{children}</p>
    )
}