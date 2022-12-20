import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.navBorder};
`;

export const A = styled(Link)`
  font-size: 1rem;
  color: ${(props) =>
    props.selected ? props.theme.text : props.theme.textSecondary};
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  border-bottom: ${(props) =>
    props.selected ? `0.2rem solid ${props.theme.navSelect}` : "none"};
  margin-right: 1rem;
  padding-bottom: 0.5rem;
`;

export const Menu = styled.div`
  display: flex;
  gap: 1rem;
  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.text};
    :hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }
`;
