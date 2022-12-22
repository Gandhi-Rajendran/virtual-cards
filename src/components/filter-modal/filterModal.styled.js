import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 32%;
  background-color: ${(props) => props.theme.background};
  position: absolute;
  top: 8%;
  right: 3%;
  z-index: 100;
  border-radius: 0.3rem;
  box-shadow: 0 0 1rem ${(props) => props.theme.shadow};
  > div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }
`;

export const H = styled.p`
  font-size: 1.2rem;
  padding: 0.8rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.navBorder};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    width: 50%;
    align-items: center;
    gap: 0.2rem;
    input {
      /* font-size: 4rem; */
    }
  }
`;
export const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  option {
    /* background-color: blue; */
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.6rem 1rem;
  background-color: ${(props) =>
    props.spent ? props.theme.buttonBackground2 : props.theme.background};
  color: ${(props) => (props.spent ? props.theme.buttonText2 : "")};
  box-shadow: 0 0 1rem ${(props) => props.theme.shadow};
  border: none;
  border-radius: 0.3rem;
  width: 50%;
  :hover {
    cursor: pointer;
  }
`;
