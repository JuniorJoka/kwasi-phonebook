import styled from "styled-components";

import { device } from "../../shared/device";

export const Wrapper = styled.div`
  color: hsl(200, 50%, 10%);
  @media ${device.tablet} {
    border-right: 10px solid hsl(200, 50%, 10%);
    height: 100vh;
    overflow-y: scroll;
    width: 310px;

    ::-webkit-scrollbar {
      background-color: transparent;
      height: 3px;
      width: 0px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: hsl(200, 50%, 10%);
      border-radius: 6px;
      height: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: hsla(200, 0%, 0%, 0);
    }
  }
`;
