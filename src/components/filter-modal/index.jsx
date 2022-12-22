import React from "react";
import {
  Button,
  ButtonWrapper,
  H,
  ModalContainer,
  Select,
  Wrapper,
} from "./filterModal.styled";

const FilterModal = ({ filterCloseHandler }) => {
  return (
    <ModalContainer>
      <H>Filter</H>
      <div>
        <p>Type</p>
        <Wrapper>
          <span>
            <input type="checkbox" />
            Subscription
          </span>
          <span>
            <input type="checkbox" />
            Burner
          </span>
        </Wrapper>
        <Select>
          <option selected disabled hidden>
            Select Cardholder
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <ButtonWrapper>
          <Button spent={true}>Apply</Button>
          <Button onClick={filterCloseHandler}>Cancel</Button>
        </ButtonWrapper>
      </div>
    </ModalContainer>
  );
};

export default FilterModal;
