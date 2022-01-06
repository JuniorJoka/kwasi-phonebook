import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: hsl(200, 20%, 99%);
  display: grid;
  padding: 12px;
  place-items: center;
  position: relative;

  input {
    background-color: hsl(200, 25%, 90%);
    border-radius: 8px;
    border: none;
    color: hsl(200, 50%, 10%);
    font-size: 22px;
    height: 36px;
    outline: none;
    padding: 0 36px 0 8px;
    width: 100%;

    &:focus {
      background-color: hsl(200, 20%, 85%);
    }
  }

  svg {
    position: absolute;
    right: 20px;
    stroke: hsl(200, 50%, 10%);
    cursor: pointer;
  }
`;
