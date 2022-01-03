import { Card, CardContent, CardImage, ProfileName, Time, Wrapper } from "./styles";

export const Recents = () => {
  const fakeData = new Array(10).fill(Math.random);
  return (
    <Wrapper>
      {fakeData.map((key) => (
        <Card key={key}>
          <CardImage />
          <CardContent>
            <ProfileName>PlaceHolderName</ProfileName>
            <Time>12min ago</Time>
          </CardContent>
        </Card>
      ))}
    </Wrapper>
  );
};
