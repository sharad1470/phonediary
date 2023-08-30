import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT} from '../action-types/actionTypes';
import api from '../../common/api/contacts';


const initialState={
    contacts:[],
    query:""

}
export const contactsReducer=(state=initialState,action)=>{

    switch(action.type){
        case 'ADD_CONTACTS':
            {

                
                return {...state,contacts:[...state.contacts,...action.data]}
            }

            case 'ADD_CONTACT':
                {
    
                    
                    return {...state,contacts:[...state.contacts,action.data]}
                }
            
        
        case 'DELETE_CONTACT':
            {
                const id=action.data;
                const newContacts=state.contacts.filter((contact)=>{
                    return contact.id!==id;
                })

                return {...state,contacts:newContacts}
            }

        case 'EDIT_CONTACT':{
            const {id}=action.data;

            const updatedContacts=state.contacts.map((contact)=>{
                return contact.id===id?action.data:contact
            })

            return {...state,contacts:updatedContacts}
        }
        case 'SEARCH_CONTACT':{
            return {...state,query:action.data}
        }
        default:
            return state;
    }

}
