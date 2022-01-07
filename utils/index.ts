import faker from "faker";
import { v4 } from "uuid";

import { Contact, ContactList } from "../shared/types";

export const filter_data = (searchTerm: string, data: ContactList): ContactList => {
  searchTerm = searchTerm.toLowerCase();
  const keys = Object.keys(data);
  const result: ContactList = {};
  for (let key of keys) {
    const resultSet = data[key].filter(
      ({ firstname, lastname, number, email }) =>
        firstname.toLocaleLowerCase().includes(searchTerm) ||
        lastname.toLocaleLowerCase().includes(searchTerm) ||
        number.includes(searchTerm) ||
        email.includes(searchTerm)
    );
    if (resultSet.length !== 0) {
      result[key] = resultSet;
    }
  }

  return result;
};

export const isAlpha = (char: string) => {
  return char.toLowerCase() != char.toUpperCase();
};

export const formatNum = (num: string) => {
  let fHalf = num.slice(0, 3);
  let sHalf = num.slice(3, 6);
  let tHalf = num.slice(6);
  return `(${fHalf}) ${sHalf}-${tHalf}`;
};

export const populateContacts = () => {
  const contacts: Contact[] = [];
  const mailing = ["@yahoo.com", "@gmail.com", "@protonmail.com", "@aol.com"];
  for (let i = 0; i < 100; i++) {
    const gender = i % 2;
    const mailEnding = Math.floor(Math.random() * mailing.length);
    const name = faker.name;
    const firstname = name.firstName(gender);
    const lastname = name.lastName(gender);
    const number = faker.phone.phoneNumber("##########");
    const email = firstname.toLowerCase() + lastname.toLowerCase() + mailing[mailEnding];
    const id = v4();
    contacts.push({ id, number, firstname, lastname, email });
  }

  const result: ContactList = {};

  for (let contact of contacts) {
    let initial = contact.firstname[0];
    initial = isAlpha(initial) ? initial.toUpperCase() : "#";
    if (!result[initial]) {
      result[initial] = [];
    }

    result[initial].push(contact);
  }

  return result;
};
