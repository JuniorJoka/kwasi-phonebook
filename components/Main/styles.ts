import styled from "styled-components";
import { device } from "../../shared/device";

export const Wrapper = styled.div`
  margin: 0 auto;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
  }
`;
