import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  display: flex;
  overflow-x: scroll;
  padding: 12px;
`;

export const Card = styled.div`
  margin: 0 4px;
`;

export const CardImage = styled.div`
  background-color: gray;
  border-radius: 18px;
  height: 82px;
  width: 82px;
`;

export const CardContent = styled.div`
  width: 82px;
`;

export const ProfileName = styled.p`
  margin: 2px 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Time = styled.p`
  font-size: 12px;
  margin: 0;
`;
