import { Check, X } from "react-feather";
import {
  BackDrop,
  Content,
  ContentHead,
  Extra,
  ProfileImage,
  ProfileImageSection,
  ProfileInfoSection,
  ProfileSection,
  Wrapper,
} from "./styles";

export const Modal = () => {
  return (
    <Wrapper>
      <BackDrop />
      <Content>
        <ContentHead>
          <X />
          <h2>New Contact</h2>
          <Check />
        </ContentHead>
        <ProfileSection>
          <ProfileImageSection>
            <ProfileImage />
          </ProfileImageSection>
          <ProfileInfoSection>
            <input type="text" name="firstname" id="" placeholder="first name" />
            <input type="text" name="lastname" id="" placeholder="last name" />
          </ProfileInfoSection>
        </ProfileSection>
        <Extra>
          <label htmlFor="number">Add number</label>
          <input type="number" name="number" id="number" />

          <label htmlFor="email">Add email</label>
          <input type="email" name="number" id="email" />
        </Extra>
      </Content>
    </Wrapper>
  );
};
