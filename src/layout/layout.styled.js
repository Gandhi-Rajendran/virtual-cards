import styled from "styled-components";

export const LayoutContainer = styled.div`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  height: 90%;
  /* overflow-y: scroll; */
  /* scroll-behavior: smooth; */
  background-color: lightgreen;
`;
