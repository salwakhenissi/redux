import React from "react";
import { useSelector } from "react-redux";
import ContactCard from "./contactCard";

function ContactList() {
    // const [contacts,setContacts]=useState([])
    const contacts = useSelector((state) => state.contactReducer.contacts);
    console.log(contacts);
    return (
        <div>
            <h1>Contact List</h1>
            {contacts.map((contact) => (
                <ContactCard contact={contact} />
            ))}
        </div>
    );
}

export default ContactList;