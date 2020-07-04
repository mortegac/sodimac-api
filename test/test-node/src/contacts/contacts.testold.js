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

describe('contacts.js', () => {

    describe('function add', () => {
        beforeEach(() => {
            resetContacts();
        })

        test('add successfully one contact', () => {
            addContact(allContacts[1]);
            const actualState = showAllContacts();
            expect(actualState).toEqual([allContacts[1]])
        })

        test('add fail by id miss', () => {
            const contact = {
                name: 'Gabriel',
                email: 'gabriel@gmail.com'
            }
            expect(() => addContact(contact)).toThrow('Invalid format')
        })

        test('add fail by name miss', () => {
            const contact = {
                email: 'gabriel@gmail.com'
            }
            expect(() => addContact(contact)).toThrow('Invalid format')
        })

    })

    describe('function remove', () => {

        beforeEach(() => {
            resetContacts();
            allContacts.forEach(contact => addContact(contact))
        })

        test('remove successfully one contact', () => {
            removeContact(2);
            const actualState = showAllContacts();
            const mockContacts = [allContacts[0], allContacts[2]];
            expect(actualState).toEqual(mockContacts);
        })

        test('remove fail by id not found', () => {
            expect(() => removeContact(600)).toThrow('Contact no exist')
        })

    })

})