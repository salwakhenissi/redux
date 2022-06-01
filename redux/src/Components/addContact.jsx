import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../JS/Actions/contactAction";
function AddContact() {
    const [contact, setContact] = useState({});
    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };
    //import actions from redux
    const dispatch = useDispatch();
    console.log(contact);
    return (
        <div>
            <h1></h1>
            <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
            />
            <input
                name="email"
                type="text"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                name="phone"
                type="text"
                placeholder="Phone"
                onChange={handleChange}
            />
            <button type="submit" onClick={() => dispatch(addContact(contact))}>
                Add
            </button>
        </div>
    );
}
export default AddContact;