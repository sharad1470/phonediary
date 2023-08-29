import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({contact, deleteContactHandler}) => {
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