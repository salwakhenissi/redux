import React from "react";
import { useDispatch } from "react-redux";
import { removeContact } from "../JS/Actions/contactAction";

function ContactCard({ contact }) {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={() => dispatch(removeContact(contact.id))}>
                Delete
            </button>
        </div>
    );
}

export default ContactCard;