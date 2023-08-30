import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/actions/actions';
import api from '../../../common/api/contacts';

const Card = ({contact}) => {
    const dispatch=useDispatch();

    const deleteContactHandler=async (id)=>{
        await api.delete(`/contacts/${id}`);
    
        dispatch(deleteContact(id));
      } 
    return (
        <div className='card'>
            <div className='card-left'>
            <div className='card-content'>{contact.name}</div>
            <div>{contact.phone}</div>
            </div>
            <div className='absolute-center card-right absolute-center'>
            <i style={{color:'red'}} class="fa-solid fa-trash"  onClick={()=>deleteContactHandler(contact.id)}></i>
            <Link to={'/edit-contact'} state={contact}>
                <i class="fa-solid fa-pen-to-square"></i>
            </Link>
            </div>
        </div>
    );
};

export default Card;