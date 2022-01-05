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

export type ContactWithTimeChecked = Contact & {
  epoch: number;
};

export interface Store {
  contacts: ContactList;
  activeContact: Contact | null;
  previousContacts: ContactWithTimeChecked[];
  setActive: (contact: Contact) => void;
  addPrevious: (contact: ContactWithTimeChecked) => void;
  addContact: (contact: Contact) => void;
  removeContact: (contact: Contact) => void;
  editContact: (contact: Contact) => void;
}
