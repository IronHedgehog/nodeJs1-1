const {
  getList,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = getList();
      console.table(contacts);
      break;

    case "get":
      const contact = getContactById(id);
      console.log(contact);
      break;

    case "add":
      const addedContact = addContact(name, email, phone);
      console.log("addedContact", addedContact);
      break;

    case "remove":
      const removedContact = removeContact(id);
      console.log("removedContact", removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const arr = hideBin(process.argv);

console.log("arr", arr);

const { argv } = yargs(arr);

invokeAction(argv);
