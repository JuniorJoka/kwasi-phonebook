import { Contact, SectionProps } from "../../shared/types";
import useStore from "../../store/useStore";
import { filter_data } from "../../utils";
import {
  Button,
  Card,
  Heading,
  NoneField,
  ProfileCard,
  ProfileContent,
  ProfileImage,
  ProfileName,
  ProfileNumber,
  Wrapper,
} from "./styles";

export const SectionCard = ({ searchTerm, modalHandler, detailHandler }: SectionProps) => {
  const [data, set] = useStore((state) => [state.contacts, state.setActive]);
  const contacts = searchTerm ? filter_data(searchTerm, data) : data;
  const keys = Object.keys(contacts).sort();

  const handler = (contact: Contact) => {
    set(contact);
    detailHandler();
  };

  return (
    <>
      {keys.length ? (
        keys.map((value) => (
          <Wrapper key={value}>
            <Heading>{value}</Heading>
            <Card>
              {contacts[value]
                .sort((a, b) => (a.firstname < b.firstname ? -1 : 1))
                .map(({ id, firstname, lastname, number, email }) => (
                  <ProfileCard key={id} onClick={() => handler({ id, firstname, lastname, number, email })}>
                    <ProfileImage>
                      {firstname[0].toUpperCase()}
                      {lastname && lastname[0].toUpperCase()}
                    </ProfileImage>
                    <ProfileContent>
                      <ProfileName>
                        {firstname} {lastname}
                      </ProfileName>
                      <ProfileNumber>{number ? number : "No number"}</ProfileNumber>
                    </ProfileContent>
                  </ProfileCard>
                ))}
            </Card>
          </Wrapper>
        ))
      ) : (
        <NoneField>
          <div>
            <h2>No Contacts Found</h2>
            <Button onClick={modalHandler}>Add a Contact</Button>
          </div>
        </NoneField>
      )}
    </>
  );
};
