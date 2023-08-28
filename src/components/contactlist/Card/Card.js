import React from 'react';
import './Card.css';

const Card = ({contact}) => {
    return (
        <div className='card'>
            <div className='card-content'>{contact.name}</div>
            <div>{contact.email}</div>
        </div>
    );
};

export default Card;