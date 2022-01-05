import create from "zustand";
import { Store, Contact } from "../shared/types";

const useStore = create<Store>((set) => ({
  contacts: {},
  activeContact: null,
  previousContacts: [],
  setActive: (contact) => set((state) => ({ activeContact: contact })),
  addPrevious: (contact) => set((state) => ({ previousContacts: [...state.previousContacts, contact] })),

  addContact: (contact) =>
    set((state) => {
      const initial = contact.firstname[0];
      const categories = state.contacts;
      if (!categories[initial]) {
        categories[initial] = [];
      }

      let contacts = categories[initial];
      const newContacts = [...contacts, contact];
      categories[initial] = newContacts;

      return { contacts: categories };
    }),

  editContact: (contact) =>
    set((state) => {
      const initial = contact.firstname[0];
      const categories = state.contacts;
      let contacts = categories[initial];
      const newContacts = contacts.filter(({ id }) => contact.id !== id);
      categories[initial] = [...newContacts, contact];

      return { contacts: categories };
    }),

  removeContact: (contact: Contact) =>
    set((state) => {
      const initial = contact.firstname[0];
      const categories = state.contacts;
      let contacts = categories[initial];
      const newContacts = contacts.filter(({ id }) => contact.id !== id);
      categories[initial] = newContacts;

      return { contacts: categories };
    }),
}));

export default useStore;
