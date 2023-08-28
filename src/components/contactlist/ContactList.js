import React from 'react';
import './ContactList.css';
import Card from './Card/Card';
const ContactList = ({contactList}) => {
    console.log(contactList);
    return (
        <div className='contactlist'>
            <div className='contactlist-search'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder='Search contact in the list'/>
            </div>
            <div className='contactlist-info'>
                {
                    contactList.length?(
                        contactList.map((contact)=>{
                            return <Card contact={contact}/>
                        })
                    ):(<div>Loading...</div>)
                }
                
            </div>
        </div>
    );
};

export default ContactList;