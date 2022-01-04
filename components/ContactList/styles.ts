import styled from "styled-components";
import { device } from "../../shared/device";

export const Wrapper = styled.div`
  @media ${device.tablet} {
    max-width: 310px;
    border-right: 10px solid black;
    overflow-y: scroll;
    height: 100vh;
  }
`;
