import { Edit, Profile, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Wrapper>
      <Profile />
      <h2>Contacts</h2>
      <Edit />
    </Wrapper>
  );
};
