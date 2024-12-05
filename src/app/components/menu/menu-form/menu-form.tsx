'use client';
import { FC, ReactNode, useEffect} from "react"
import { MenuFormProps } from "./menu-form.types"
import { TextField } from "../../ui/text-field/text-field";
import { menuFormSchema } from "@/app/utils/validators/schema/menu";
import { MenuFormType } from "./menu-form.types";
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, Controller } from 'react-hook-form';
import { TextLabel } from "../../ui/text-field/text-field";
import { ErrorMessage } from "./error-message";

export const MenuForm: FC<MenuFormProps> & { Actions: FC<{ children: ReactNode }>} = ({id, title, onValidateForm, isMainMenu, initMenuItem, onSubmitMenuItem, children}) => {
    const { control, handleSubmit, formState: { errors }, formState } = useForm<MenuFormType>({
        resolver: joiResolver(menuFormSchema),
        mode: 'onBlur',
        defaultValues: {
          name: initMenuItem?.name ? initMenuItem.name : '',
          url: initMenuItem?.url ? initMenuItem.url : ''
        }
    });

    const onSubmit = (data: MenuFormType) => {
        const menuItem = id ? { id, ...data} : data;
        onSubmitMenuItem(menuItem);
    };

    useEffect(() => {
        onValidateForm && onValidateForm(formState.isValid)
    }, [formState.isValid])

    return (
        <div>
            <div className="border py-5 px-6 rounded-md bg-white">
                {title && <h2 className="text-lg mb-4">{title}</h2>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <TextLabel htmlFor="name">{ isMainMenu? 'Menu' : 'Nazwa'}</TextLabel>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) =>  <TextField
                                                        {...field}
                                                        onChange={(e) => {
                                                            field.onChange(e);
                                                        }} 
                                                        className="mb-2"
                                                        name="name"
                                                        error={errors.name ? true : false} 
                                                        placeholder={ isMainMenu? 'np. Menu główne' : "np. Promocje"} />
                                                    }
                        />
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </div>

                    <div>
                        <TextLabel htmlFor="url">URL</TextLabel>
                        <Controller
                        name="url"
                        control={control}
                        render={({ field }) => <TextField
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e);
                                                    }} 
                                                    className="mb-2"
                                                    name="url" 
                                                    error={errors.url ? true : false} 
                                                    placeholder="np. Promocje" />}
                        />
                        {errors.url && <ErrorMessage>{errors.url.message}</ErrorMessage>}
                    </div>
                    {children}
                </form>
            </div>
        </div>
    )
}

MenuForm.Actions = ({ children }: React.ComponentProps<"div">) => (
    <div>{children}</div>
);
    
    