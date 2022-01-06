import { useTransition } from "@react-spring/web";
import { useState } from "react";
import { Check, X, XCircle } from "react-feather";
import { v4 } from "uuid";

import { voidFunc } from "../../shared/types";
import useStore from "../../store/useStore";
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

export const Modal = ({ active, modalHandler }: { active: boolean; modalHandler: voidFunc }) => {
  const transition = useTransition(active, {
    from: { opacity: 0, y: 0 },
    enter: { opacity: 1, y: 0 },
    leave: (item) => async (next) => {
      await next({ opacity: 0 });
      await next({ y: 2000 });
    },
  });

  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const addContact = useStore((state) => state.addContact);

  const handler = () => {
    if (!firstname) return;
    addContact({ firstname, lastname, number, email, id: v4() });
    defaultState();
    modalHandler();
  };

  const defaultState = () => {
    setFirst("");
    setLast("");
    setNumber("");
    setEmail("");
  };

  const cancelHandler = () => {
    defaultState();
    modalHandler();
  };

  return (
    <>
      {transition((style, item) => {
        return (
          item && (
            <Wrapper style={style}>
              <BackDrop onClick={cancelHandler} />
              <Content>
                <ContentHead>
                  <X onClick={cancelHandler} />
                  <h2>New Contact</h2>
                  {firstname ? <Check onClick={handler} /> : <div />}
                </ContentHead>
                <ProfileSection>
                  <ProfileImageSection>
                    <ProfileImage>
                      {firstname && firstname[0].toUpperCase()}
                      {lastname && lastname[0].toUpperCase()}
                    </ProfileImage>
                  </ProfileImageSection>
                  <ProfileInfoSection>
                    <div>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="first name"
                        value={firstname}
                        onChange={(e) => setFirst(e.target.value)}
                      />
                      {firstname && <XCircle onClick={() => setFirst("")} />}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastname"
                        placeholder="last name"
                        value={lastname}
                        onChange={(e) => setLast(e.target.value)}
                      />
                      {lastname && <XCircle onClick={() => setLast("")} />}
                    </div>
                  </ProfileInfoSection>
                </ProfileSection>
                <Extra>
                  <label htmlFor="number">Add number</label>
                  <div>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      value={number}
                      onChange={(e) => {
                        e.target.value.length < 11 && setNumber(e.target.value);
                      }}
                    />
                    {number && <XCircle onClick={() => setNumber("")} />}
                  </div>

                  <label htmlFor="email">Add email</label>
                  <div>
                    <input
                      type="email"
                      name="number"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {email && <XCircle onClick={() => setEmail("")} />}
                  </div>
                </Extra>
              </Content>
            </Wrapper>
          )
        );
      })}
    </>
  );
};
