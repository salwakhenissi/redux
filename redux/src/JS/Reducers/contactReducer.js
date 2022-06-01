import {
    ADD_CONTACT,
    DELETE_CONTACT,
} from "../ActionsTypes/contactActionsType";
const initialState = {
    contacts: [
        {
            id: 1,
            name: "Jhon Doe",
            email: "jhonDoe@gmail.com",
            phone: "123-456-7890",
        },
        {
            id: 2,
            name: "Karen Williams",
            email: "karen@gmail.com",
            phone: "123-456-7890",
        },
    ],
    loading: false,
};
//Pure fucntion
// payload is the data that we want to pass to the reducer (we will pass the data from the component to the reducer)
export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };
        default:
            return state;
    }
};