import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 300rem;
  /* height: 12rem; */
  background-color: darkcyan;
  /* display: flex; */
  /* flex-direction: column; */
  padding: 1rem;
  border-radius: 0.3rem;
  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    div {
      flex-direction: column;
    }
  }
`;

export const Logo = styled.p`
  background-color: ${(props) => props.theme.logoBackground};
  font-size: 2rem;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: 14%;
  border-radius: 50%;
  svg {
    color: ${(props) => props.theme.logo};
  }
`;

export const Bar = styled.div`
  height: 0.8rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.barAvailable};
  margin-bottom: 0.5rem;
  position: relative;
  overflow: hidden;
  div {
    position: absolute;
    background-color: ${(props) => props.theme.barSpent};
    width: 80%;
    height: 100%;
  }
`;
