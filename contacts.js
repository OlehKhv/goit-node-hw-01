import { nanoid } from 'nanoid';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const contactsPath = path.join('db', 'contacts.json');

export async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        return JSON.parse(data);
    } catch (error) {
        console.log(error.message);
    }
}

export async function getContactById(contactId) {
    try {
        const contacts = await listContacts();
        const contact = contacts.find(contact => contact.id === contactId);
        return contact || null;
    } catch (error) {
        console.log(error.message);
    }
}

export async function removeContact(contactId) {
    try {
        const contacts = await listContacts();
        const removedContact = contacts.find(
            contact => contact.id === contactId
        );

        if (!removedContact) return null;

        const newContacts = contacts.filter(el => el.id !== contactId);
        await fs.writeFile(contactsPath, JSON.stringify(newContacts));
        return removedContact;
    } catch (error) {
        console.log(error.message);
    }
}

export async function addContact(name, email, phone) {
    try {
        const contacts = await listContacts();
        const newContact = { id: nanoid(), name, email, phone };
        contacts.push(newContact);
        await fs.writeFile(contactsPath, JSON.stringify(contacts));

        return newContact;
    } catch (error) {
        console.log(error.message);
    }
}
