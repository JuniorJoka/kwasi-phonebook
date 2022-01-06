import useStore from "../../store/useStore";

import { Card, CardContent, CardImage, ProfileName, Wrapper } from "./styles";

export const Recents = () => {
  const contacts = useStore((state) => state.previousContacts);
  return (
    <Wrapper>
      {contacts.map(({ id, firstname, lastname }) => (
        <Card key={id}>
          <CardImage>
            {firstname[0].toUpperCase()}
            {lastname[0].toUpperCase()}
          </CardImage>
          <CardContent>
            <ProfileName>{`${firstname}`}</ProfileName>
          </CardContent>
        </Card>
      ))}
    </Wrapper>
  );
};
