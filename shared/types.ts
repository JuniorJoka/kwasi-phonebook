export type Contact = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  number: string;
};

export interface ContactList {
  [key: string]: Contact[];
}

export interface Store {
  contacts: ContactList;
  activeContact: Contact | null;
  previousContacts: Contact[];
  setActive: (contact: Contact) => void;
  addPrevious: (contact: Contact) => void;
  addContact: (contact: Contact) => void;
  removeContact: (contact: Contact) => void;
}
