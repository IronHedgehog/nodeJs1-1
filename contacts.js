const fs = require("fs");
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
  console.log("first", JSON.parse(data));
};
getAll();
// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }
