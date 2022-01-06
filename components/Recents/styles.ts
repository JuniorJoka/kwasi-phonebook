import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: hsl(200, 20%, 99%);
  display: flex;
  overflow-x: scroll;
  padding: 12px;

  ::-webkit-scrollbar {
    background-color: transparent;
    height: 3px;
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 6px;
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: hsla(200, 0%, 0%, 0);
  }
`;

export const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 4px;
`;

export const CardImage = styled.div`
  background-color: hsl(200, 50%, 10%);
  border-radius: 18px;
  color: hsl(200, 20%, 99%);
  display: grid;
  font-size: 28px;
  font-weight: bold;
  height: 62px;
  place-items: center;
  width: 62px;
`;

export const CardContent = styled.div`
  width: 82px;
`;

export const ProfileName = styled.p`
  margin: 2px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const Time = styled.p`
  font-size: 12px;
  margin: 0;
`;
