const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");
console.log("contactsPath", contactsPath);

const getList = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};
const getContactById = async (contactId) => {
  const contacts = await getList();
  const nededBook = contacts.find(
    (contact) => String(contact.id) === String(contactId)
  );
  if (!nededBook) {
    return null;
  }
  return nededBook;
};

const removeContact = async (contactId) => {
  const contacts = await getList();
  const removedIndex = contacts.findIndex(
    ({ id }) => String(id) === String(contactId)
  );
  if (removedIndex === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(removedIndex, 1);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removedContact;
};

const addContact = async (name, email, phone) => {
  const contacts = await getList();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const func = {
  getList,
  getContactById,
  removeContact,
  addContact,
};

module.exports = func;
