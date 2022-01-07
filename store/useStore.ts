import { v4 } from "uuid";
import create from "zustand";

import { Store, Contact } from "../shared/types";
import { isAlpha, populateContacts } from "../utils";

const useStore = create<Store>((set) => ({
  contacts: populateContacts(),
  activeContact: null,
  previousContacts: [],
  setActive: (contact) => set((state) => ({ activeContact: contact })),
  addPrevious: (contact) =>
    set((state) => {
      const contactsWithoutContact = state.previousContacts.filter(({ id }) => contact.id !== id);
      return {
        previousContacts: [...contactsWithoutContact, contact],
      };
    }),

  addContact: (contact) =>
    set((state) => {
      let initial = contact.firstname[0];
      initial = isAlpha(initial) ? initial.toUpperCase() : "#";
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
      let prevInitial = prev.firstname[0];
      prevInitial = isAlpha(prevInitial) ? prevInitial.toUpperCase() : "#";

      let currInitial = contact.firstname[0];
      currInitial = isAlpha(currInitial) ? currInitial.toUpperCase() : "#";

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
      let initial = contact.firstname[0];
      initial = isAlpha(initial) ? initial.toUpperCase() : "#";
      const categories = state.contacts;
      let contacts = categories[initial];
      const newContacts = contacts.filter(({ id }) => contact.id !== id);
      categories[initial] = newContacts;

      if (!categories[initial]) {
        delete categories[initial];
      }

      return { contacts: categories };
    }),
}));

export default useStore;
