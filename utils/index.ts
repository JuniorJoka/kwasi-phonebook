import { ContactList } from "../shared/types";

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
