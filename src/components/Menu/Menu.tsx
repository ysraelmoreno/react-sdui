import { HTMLAttributes } from "react";
import {
  MenuContainer,
  MenuItem,
  MenuItemsContainer,
  MenuWrapper,
} from "./styles";

interface MenuItems {
  path: string;
  label: string;
}

interface IMenuProps extends HTMLAttributes<HTMLDivElement> {
  items: MenuItems[];
  logo: string;
}

const Menu = ({ logo, items, ...props }: IMenuProps) => (
  <MenuContainer {...props}>
    <MenuWrapper>
      <img src={logo} />
      <MenuItemsContainer>
        {items?.map((item) => (
          <MenuItem key={item.path} to={item.path}>
            {item.label}
          </MenuItem>
        ))}
      </MenuItemsContainer>
    </MenuWrapper>
  </MenuContainer>
);

export default Menu;
