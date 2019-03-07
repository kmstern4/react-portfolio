import React from 'react';
import { EmailItem, ContactItem } from '../styledComponents/StyledContact';

const Contact = () => {
    return <>
        <EmailItem>kmstern4@gmail.com</EmailItem>
        <a href='https://github.com/kmstern4'><ContactItem>GitHub</ContactItem></a>
        <ContactItem>LinkedIn</ContactItem>
    </>
}

export default Contact;