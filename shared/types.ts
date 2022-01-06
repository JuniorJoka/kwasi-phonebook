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

export interface DetailProps {
  onMobile: boolean;
  active: boolean;
  modalHandler: voidFunc;
  detailHandler?: voidFunc;
}

export interface SearchProps {
  handler: (event: any) => void;
  term: string;
  resetHandler: voidFunc;
}
export interface SectionProps {
  searchTerm: string;
  modalHandler: voidFunc;
  detailHandler: voidFunc;
}
export interface Store {
  contacts: ContactList;
  activeContact: Contact | null;
  previousContacts: Contact[];
  setActive: (contact: Contact | null) => void;
  addPrevious: (contact: Contact) => void;
  addContact: (contact: Contact) => void;
  removeContact: (contact: Contact) => void;
  editContact: (prev: Contact, contact: Contact) => void;
}

export type voidFunc = () => void;
