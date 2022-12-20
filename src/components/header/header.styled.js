import styled from "styled-components";

export const HeaderContainer = styled.div`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    border: none;
    :hover {
      cursor: pointer;
    }
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  button {
    font-size: 0.75rem;
    align-items: flex-end;
    gap: 0.2rem;
    padding: 0.2rem;
    border-radius: 0.3rem;
    color: ${(props) => props.theme.buttonText};
  }
`;

export const AddButton = styled.button`
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0rem 0rem 0.5rem ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.background};
`;
