import {
  Card,
  Heading,
  ProfileCard,
  ProfileContent,
  ProfileImage,
  ProfileName,
  ProfileNumber,
  Wrapper,
} from "./styles";

export const SectionCard = () => {
  const fakeData = new Array(10).fill(Math.random);
  return (
    <Wrapper>
      <Heading>A</Heading>
      <Card>
        {fakeData.map((key) => (
          <ProfileCard key={key}>
            <ProfileImage />
            <ProfileContent>
              <ProfileName>Alex Joka</ProfileName>
              <ProfileNumber>(233) 502190746</ProfileNumber>
            </ProfileContent>
          </ProfileCard>
        ))}
      </Card>
    </Wrapper>
  );
};
