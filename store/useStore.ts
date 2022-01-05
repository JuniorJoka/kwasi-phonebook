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

  editContact: (prev, contact) =>
    set((state) => {
      const prevInitial = prev.firstname[0];
      const currInitial = contact.firstname[0];
      const categories = state.contacts;
      // delete previous entry
      let contacts = categories[prevInitial];
      const newContacts = contacts.filter(({ id }) => contact.id !== id);
      categories[prevInitial] = [...newContacts];
      if (categories[prevInitial]) {
        delete categories[prevInitial];
      }
      // insert new entry
      if (!categories[currInitial]) {
        categories[currInitial] = [];
      }
      contacts = categories[currInitial];
      categories[currInitial] = [...contacts, contact];

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
