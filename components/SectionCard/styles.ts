import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 12px;
`;

export const Heading = styled.p`
  font-weight: bold;
  margin: 0 0 12px 4px;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 12px;
`;

export const ProfileCard = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 8px 0;
`;

export const ProfileImage = styled.div`
  background-color: hsl(200, 50%, 10%);
  border-radius: 8px;
  color: hsl(200, 20%, 99%);
  display: grid;
  font-size: 28px;
  font-weight: bold;
  height: 48px;
  margin-right: 8px;
  place-items: center;
  width: 48px;
`;

export const ProfileContent = styled.div`
  border-bottom: 0.5px solid hsl(200, 25%, 90%);
  flex-grow: 1;
  padding: 8px 0;
`;

export const ProfileName = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const ProfileNumber = styled.p`
  color: hsl(200, 30%, 30%);
  margin: 0;
`;

export const NoneField = styled.div`
  display: grid;
  height: 500px;
  place-items: center;

  div {
    display: grid;
    place-items: center;
  }
`;

export const Button = styled.div`
  background-color: hsl(200, 50%, 10%);
  border-radius: 8px;
  color: hsl(200, 20%, 99%);
  cursor: pointer;
  padding: 16px;
`;
