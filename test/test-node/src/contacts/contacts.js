let contacts = [];

export const addContact = contact => {
    if (contact.hasOwnProperty('name') && contact.hasOwnProperty('email') && contact.hasOwnProperty('id')) {
        contacts.push(contact);
    } else {
        throw 'Invalid format';
    }
};

export const removeContact = contactId => {
    const contactsOld = contacts;
    contacts = contacts.filter(contact => contact.id !== contactId);
    if(contactsOld.length === contacts.length) {
        throw 'Contact no exist'
    }
};

export const resetContacts = () => {
    contacts = [];
}

export const showAllContacts = () => {
    return contacts;
}