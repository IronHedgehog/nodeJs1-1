const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");
console.log("contactsPath", contactsPath);

// const getList = async () => {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data);
// };
// getList();

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};
const getContactById = async (contactId) => {
  const contacts = await getAll();
  const nededBook = contacts.find(
    (contact) => String(contact.id) === String(contactId)
  );
  if (!nededBook) {
    return null;
  }
  return nededBook;
};
getContactById(2);
function removeContact(contactId) {
  // ...твой код
}

// function addContact(name, email, phone) {
//   // ...твой код
// }
