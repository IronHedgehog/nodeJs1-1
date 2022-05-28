const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");

const {
  getList,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await getList();
      console.table(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;

    case "add":
      const addedContact = await addContact(name, email, phone);
      console.log("addedContact", addedContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      console.log("removedContact", removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);

const { argv } = yargs(arr);

invokeAction(argv);
