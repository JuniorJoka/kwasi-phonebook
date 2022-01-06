import { animated } from "@react-spring/web";
import styled from "styled-components";

import { device } from "../../shared/device";

export const Wrapper = styled(animated.div)`
  color: hsl(200, 50%, 10%);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const BackDrop = styled.div`
  background-color: hsl(200, 50%, 10%);
  height: 100vh;
  opacity: 0.8;
`;

export const Content = styled.div`
  background-color: hsl(200, 20%, 99%);
  border-radius: 8px;
  left: 50%;
  padding: 8px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 94%;

  @media ${device.tablet} {
    width: 410px;
  }

  svg {
    cursor: pointer;
    stroke: hsl(200, 50%, 10%);
  }
`;

export const ContentHead = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  h2 {
    margin: 0;
  }
`;

export const ProfileImageSection = styled.div`
  width: 72px;
`;

export const ProfileInfoSection = styled.div`
  width: 100%;

  div {
    position: relative;
  }

  input {
    background-color: hsl(200, 25%, 90%);
    border-radius: 8px;
    border: none;
    height: 36px;
    margin: 8px 0;
    outline: none;
    padding: 0 36px 0 8px;
    width: 100%;

    &:focus {
      background-color: hsl(200, 20%, 85%);
    }
  }

  svg {
    position: absolute;
    right: 4px;
    top: 14px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  margin: 16px auto;
`;

export const ProfileImage = styled.div`
  background-color: hsl(200, 50%, 10%);
  border-radius: 8px;
  color: hsl(200, 20%, 99%);
  display: grid;
  font-size: 22px;
  font-weight: bold;
  height: 46px;
  margin-top: 8px;
  place-items: center;
  width: 46px;
`;

export const Extra = styled.div`
  margin: 8px 0;

  label {
    display: block;
  }

  div {
    position: relative;
  }

  input {
    background-color: hsl(200, 25%, 90%);
    border-radius: 8px;
    border: none;
    height: 36px;
    margin: 8px 0;
    outline: none;
    padding: 0 36px 0 8px;
    width: 100%;

    &:focus {
      background-color: hsl(200, 20%, 85%);
    }
  }

  svg {
    position: absolute;
    right: 4px;
    top: 14px;
  }
`;
