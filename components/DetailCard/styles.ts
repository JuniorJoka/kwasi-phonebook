import { animated } from "@react-spring/web";

import styled from "styled-components";
import { device } from "../../shared/device";

export const Wrapper = styled(animated.div)`
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  overflow: scroll;
  color: hsl(200, 50%, 10%);
  z-index: 2;
  svg {
    stroke: hsl(200, 50%, 10%);
    cursor: pointer;
  }

  @media ${device.tablet} {
    position: relative;
    width: inherit;
  }
`;

export const Header = styled.div`
  background-color: hsl(200, 25%, 90%);
  padding: 20px 20px;
`;

export const Body = styled.div`
  background-color: hsl(200, 20%, 99%);
  height: 80%;
  padding: 20px;
`;

export const ProfileHead = styled.div`
  background-color: hsl(200, 50%, 10%);
  border-radius: 16px;
  height: 108px;
  margin: 0 auto;
  width: 108px;
  display: grid;
  place-items: center;
  color: hsl(200, 20%, 99%);
  font-weight: bold;
  font-size: 36px;
`;

export const ProfileName = styled.h2`
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px auto;
  max-width: 430px;
`;

export const Action = styled.div<{ color?: string }>`
  background-color: hsl(200, 50%, 10%);
  border-radius: 8px;
  height: 56px;
  width: 56px;
  background-color: ${({ color }) => color};
  display: grid;
  place-items: center;
  cursor: pointer;

  svg {
    stroke: hsl(200, 20%, 99%);
  }
`;

export const Section = styled.div`
  margin: 18px auto;
  max-width: 430px;

  input {
    background-color: hsl(200, 25%, 90%);
    border: none;
    font-size: 16px;
    outline: none;
    width: 100%;
    padding: 4px;
    height: 32px;
    border-radius: 4px;

    &:focus {
      background-color: hsl(200, 20%, 85%);
    }
  }
`;
export const Label = styled.h3`
  margin: 8px 0;
`;
export const Field = styled.div`
  border-bottom: 2px solid hsl(200, 25%, 90%);
  height: 32px;
`;

export const NoneSelectedField = styled.div`
  display: grid;
  height: 100%;
  place-items: center;

  div {
    display: grid;
    place-items: center;
  }

  span {
    color: blue;
    cursor: pointer;
  }
`;

export const Nav = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 500px;
  width: 100%;
  justify-content: space-between;
`;
