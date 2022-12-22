import styled from "styled-components";

export const Header = styled.header`
  padding-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  span {
    display: flex;
    align-items: flex-end;
    :hover {
      cursor: pointer;
    }
  }
  input {
    padding: 0.5rem;
    border: none;
    outline: none;
    border-radius: 0.3rem;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: none;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.textSecondary};
  span {
    font-size: 1rem;
    display: flex;
    align-self: flex-end;
  }
  :hover {
    cursor: pointer;
  }
`;
