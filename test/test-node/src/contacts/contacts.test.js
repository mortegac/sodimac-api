import {addContact, removeContact, resetContacts, showAllContacts} from "./contacts";

const allContacts = [{
    name: 'Manuel',
    email: 'manuel@gmail.com',
    id: 1,
}, {
    name: 'Waldo',
    email: 'waldo@gmail.com',
    id: 2,
}, {
    name: 'Mary',
    email: 'mary@gmail.com',
    id: 3,
}];

describe('contact.js test', () => {
    describe('addContact test', () => {

        beforeEach(() => {
            resetContacts();
        })

        test('addContact successfully', () => {
            addContact(allContacts[0]);
            const contacts = showAllContacts();
            expect(contacts).toEqual([allContacts[0]])
        })

        test('addContact fail by miss id', () => {
            const contact = {name: 'Gabriel', email: 'gabriel@gmail.com'};
            expect(() => addContact(contact)).toThrow('Invalid format')
        })

        test('addContact fail by miss id and email', () => {
            const contact = {name: 'Gabriel'};
            expect(() => addContact(contact)).toThrow('Invalid format')
        })

        test('addContact fail by empty object', () => {
            const contact = {};
            expect(() => addContact(contact)).toThrow('Invalid format')
        })

        test('addContact fail by invalid object', () => {
            const contact = 'hola mundo';
            expect(() => addContact(contact)).toThrow('Invalid format')
        })

    })

    describe('removeContact test', () => {

        beforeEach(() => {
            allContacts.forEach(contact => addContact(contact));
        })

        test('removeContact successfully', () => {
            removeContact(2);
            const contacts = showAllContacts();
            const mockContact = [allContacts[0], allContacts[2]]
            expect(contacts).toEqual(mockContact);
        })

        test('removeContact fail by id', () => {
            expect(() => removeContact(9876543456)).toThrow('Contact no exist');
        })

    })

})