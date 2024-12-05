import { ComponentType, FC} from "react";
import { WithMenuPropsType } from "./menu.types";
import { useMenuContext } from "./menu-provider";
import { MenuFormType } from "../menu-form/menu-form.types";
import { useMenuItem } from "@/app/hooks/menu/use-menu-item";

export const withMenuProps = <T extends object>(
  WrappedComponent: ComponentType<T>
): FC<Omit<T, keyof WithMenuPropsType>> => {
  const ComponentWithMenuProps: FC<Omit<T, keyof WithMenuPropsType>> = (props) => {
      
      const { menu, appendMenuItem, updateMenuItem, removeMenuItem, setMenu } = useMenuContext();
      const { editMenuItem } = useMenuItem(menu);

      const handleEditMenuItem = (menuItem: Required<MenuFormType>) => {
        const editedMenuItem = editMenuItem({ id: menuItem.id, payload: { ...menuItem}});
        let currentMenuItem = menu.find(item => item.id === editedMenuItem.id);
        if(currentMenuItem){
          currentMenuItem = { ...currentMenuItem, ...editedMenuItem};
          updateMenuItem(currentMenuItem);
        }
      }

      return (
          <WrappedComponent
              {...(props as T)}
              setMenu={setMenu}
              menu={menu}
              menuLocal={menu}
              onCreateMenuItem={appendMenuItem}
              onEditMenuItem={handleEditMenuItem}
              onDeleteMenuItem={removeMenuItem}
          />
      );
  };

  ComponentWithMenuProps.displayName = `withMenuProps(${WrappedComponent.displayName || WrappedComponent.name})`;

  return ComponentWithMenuProps;
};