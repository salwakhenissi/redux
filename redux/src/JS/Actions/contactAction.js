import {
    ADD_CONTACT,
    DELETE_CONTACT,
} from "../ActionsTypes/contactActionsType";

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact,
    };
};

export const removeContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id,
    };
};