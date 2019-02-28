import React from 'react';
import { ContactList, ContactItem } from '../styledComponents/StyledContact';

const Contact = () => {
    return <>
        <ContactList>
            <ContactItem>Email</ContactItem>
            <ContactItem><a href='https://github.com/kmstern4'>GitHub</a></ContactItem>
            <ContactItem>LinkedIn</ContactItem>
        </ContactList>
    </>
}

export default Contact;