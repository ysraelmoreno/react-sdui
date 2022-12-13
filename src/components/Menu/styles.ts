import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.nav`
  background-color: #fff;
`;

export const MenuWrapper = styled.section`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 100px;
  }
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  column-gap: 30px;
`;

export const MenuItem = styled(Link)`
  color: #1c1c1c;
  transition: all 0.2s ease;

  &:hover {
    color: #858585;
  }
`;
