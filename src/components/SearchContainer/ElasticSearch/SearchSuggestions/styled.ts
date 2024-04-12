import { styled } from "styled-components";

export const StyledSearchSuggestionsContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 66px;
  z-index: 100;
  background: #1b2028;
`;

export const StyledSearchSuggestionsLi = styled.li`
  line-height: 40px;
  font-size: 18px;
  line-height: 27px;
  color: #9e9e9e;
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;