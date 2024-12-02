import { ComponentType, FC} from "react";
import { WithMenuPropsType } from "./menu.types";
import { useMenuList } from "@/app/hooks/menu/use-menu-list";

export const withMenuProps = <T extends object>(
  WrappedComponent: ComponentType<T>
): FC<Omit<T, keyof WithMenuPropsType>> => {
  const ComponentWithMenuProps: FC<Omit<T, keyof WithMenuPropsType>> = (props) => {
      const { menu, handleCreateMenuItem, handleEditMenuItem, handleDeleteMenuItem } = useMenuList();

      return (
          <WrappedComponent
              {...(props as T)}
              menu={menu}
              onCreateMenuItem={handleCreateMenuItem}
              onEditMenuItem={handleEditMenuItem}
              onDeleteMenuItem={handleDeleteMenuItem}
          />
      );
  };

  ComponentWithMenuProps.displayName = `withMenuProps(${WrappedComponent.displayName || WrappedComponent.name})`;

  return ComponentWithMenuProps;
};