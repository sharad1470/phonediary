import { ADD_CONTACTS, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT} from '../action-types/actionTypes';

export const addContacts=(data)=>{
    return {
        type:'ADD_CONTACTS',
        data
    }
}

export const addContact=(data)=>{
    return {
        type:'ADD_CONTACT',
        data
    }
}
export const deleteContact=(data)=>{
    return {
        type:'DELETE_CONTACT',
        data
    }
}
export const editContact=(data)=>{
    return {
        type:'EDIT_CONTACT',
        data
    }
}

export const searchContact=(data)=>{
    return {
        type:'SEARCH_CONTACT',
        data
    }
}