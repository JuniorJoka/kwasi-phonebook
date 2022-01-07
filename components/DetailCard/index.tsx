import { useTransition } from "@react-spring/web";
import { useEffect } from "react";
import { useState } from "react";
import { CheckCircle, Edit, MessageCircle, Phone, Trash2, Video, X } from "react-feather";

import { DetailProps } from "../../shared/types";
import useStore from "../../store/useStore";
import {
  Action,
  Actions,
  Body,
  Field,
  Header,
  Label,
  Nav,
  NoneSelectedField,
  ProfileHead,
  ProfileName,
  Section,
  Wrapper,
} from "./styles";

export const DetailCard = ({ onMobile, active, modalHandler, detailHandler }: DetailProps) => {
  const [editMode, setEditMode] = useState(false);

  const transition = useTransition(active, {
    from: { y: onMobile ? 500 : 0, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: onMobile ? 900 : 0, opacity: 0 },
  });

  let [contact, edit, set, prev, remove] = useStore((state) => [
    state.activeContact,
    state.editContact,
    state.setActive,
    state.addPrevious,
    state.removeContact,
  ]);

  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handler = () => {
    const currContant = { firstname, lastname, number, email, id: contact?.id || "" };
    if (firstname) {
      if (contact) {
        edit(contact, currContant);
        set(currContant);
      }
    } else {
      if (contact) {
        setFirst(contact.firstname);
      }
    }
    setEditMode(false);
  };

  const deleteHandler = () => {
    if (contact) {
      remove(contact);
      set(null);
      detailHandler && detailHandler();
    }
  };

  const cancelHandler = () => {
    if (contact) {
      setFirst(contact.firstname);
      setLast(contact.lastname);
      setNumber(contact.number);
      setEmail(contact.email);
    }
    setEditMode(false);
  };

  useEffect(() => {
    setEditMode(false);
    if (contact) {
      const { firstname, lastname, email, number } = contact;
      setFirst(firstname);
      setLast(lastname);
      setEmail(email);
      setNumber(number);
      prev({ ...contact });
    }
  }, [contact]);

  return (
    <>
      {transition((style, item) =>
        item && contact ? (
          <Wrapper style={style}>
            <Header>
              <Nav>
                {editMode ? <X onClick={cancelHandler} /> : onMobile ? <X onClick={detailHandler} /> : <div />}
                {editMode ? <CheckCircle onClick={handler} /> : <Edit onClick={() => setEditMode(true)} />}
              </Nav>
              <ProfileHead>
                {contact.firstname[0].toUpperCase()}
                {contact.lastname && contact.lastname[0].toUpperCase()}
              </ProfileHead>
              <ProfileName>
                {contact.firstname} {contact.lastname}
              </ProfileName>
              <Actions>
                <Action color="hsl(135, 80%, 50%)">
                  <MessageCircle />
                </Action>
                <Action color="hsl(210, 100%, 50%)">
                  <Phone />
                </Action>
                <Action color="hsl(60, 90%, 50%)">
                  <Video />
                </Action>
                <Action color="hsl(340, 100%, 50%)" onClick={deleteHandler}>
                  <Trash2 />
                </Action>
              </Actions>
            </Header>
            <Body>
              <Section>
                <Label>First name</Label>
                <Field>
                  {editMode ? (
                    <input
                      type="text"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => setFirst(e.target.value)}
                      autoFocus
                    />
                  ) : (
                    contact.firstname
                  )}
                </Field>
              </Section>
              <Section>
                <Label>Last name</Label>
                <Field>
                  {editMode ? (
                    <input type="text" name="firstname" value={lastname} onChange={(e) => setLast(e.target.value)} />
                  ) : (
                    contact.lastname
                  )}
                </Field>
              </Section>
              <Section>
                <Label>Phone number</Label>
                <Field>
                  {editMode ? (
                    <input type="number" name="firstname" value={number} onChange={(e) => setNumber(e.target.value)} />
                  ) : (
                    contact.number
                  )}
                </Field>
              </Section>
              <Section>
                <Label>Email</Label>
                <Field>
                  {editMode ? (
                    <input type="email" name="firstname" value={email} onChange={(e) => setEmail(e.target.value)} />
                  ) : (
                    contact.email
                  )}
                </Field>
              </Section>
            </Body>
          </Wrapper>
        ) : (
          !onMobile && (
            <NoneSelectedField>
              <div>
                <h3>Select a Contact to view Detail</h3>
                <p>
                  No Contacts? <span onClick={modalHandler}>Add one</span>
                </p>
              </div>
            </NoneSelectedField>
          )
        )
      )}
    </>
  );
};
