import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: hsl(200, 20%, 99%);
  display: grid;
  padding: 12px;
  place-items: center;

  input {
    background-color: hsl(200, 25%, 90%);
    border-radius: 8px;
    border: none;
    color: hsl(200, 50%, 10%);
    height: 36px;
    outline: none;
    width: 100%;

    &:focus {
      background-color: hsl(200, 20%, 85%);
    }
  }
`;
