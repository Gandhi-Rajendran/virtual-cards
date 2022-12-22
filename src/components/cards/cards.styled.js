import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 300rem;
  background-color: ${(props) => props.theme.background};
  border-radius: 0.3rem;
  font-size: 1.2rem;
  box-shadow: 0.2rem 0.2rem 0.8rem ${(props) => props.theme.shadow};
  padding: 1rem;
  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    div {
      flex-direction: column;
      span {
        color: ${(props) => props.theme.cardText};
        svg {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export const Logo = styled.p`
  background-color: ${(props) => props.theme.logoBackground};
  font-size: 1.5rem;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  box-shadow: 0 0 1rem ${(props) => props.theme.shadow};
  border-radius: 50%;
  svg {
    color: ${(props) => props.theme.logo};
  }
`;

export const Type = styled.span`
  padding: 0.1rem 0.5rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.cardText};
  border: 0.1rem solid ${(props) => props.theme.cardText};
`;

export const ProgressBar = styled.div`
  height: 0.8rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.barAvailable};
  margin-bottom: 0.5rem;
  position: relative;
  overflow: hidden;
`;

export const Fill = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.barSpent};
  width: ${(props) => props.spent}%;
  height: 100%;
`;

export const Dot = styled.span`
  display: inline-block;
  background-color: ${(props) =>
    props.isspent ? props.theme.barSpent : props.theme.barAvailable};
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.5rem;
`;
