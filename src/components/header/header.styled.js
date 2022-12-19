import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 10vh;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;

export const Head = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    button {
      color: ${(props) => props.theme.text};
    }
  }
  button {
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0rem 0rem 0.5rem black;
    background-color: ${(props) => props.theme.background};
  }
`;
