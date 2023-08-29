import React from 'react';
import './ContactList.css';
import Card from './Card/Card';
import { Link } from 'react-router-dom';
const ContactList = ({contactList, deleteContactHandler,query,searchListHandler}) => {
    
    return (
        <div className='contactlist'>
            <div className='contactlist-search-button'>
            <div className='contactlist-search'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder='Search contact in the list'
                    value={query}
                    onChange={(e)=>searchListHandler(e.target.value)}
                />
            </div>
            <Link style={{textDecoration:'none', color:'black'}} to='/add-contact'>
            <div  className='add-button'>Add Contact</div>
            </Link>
            </div>
            <div className='contactlist-info'>
                {
                    contactList.length?(
                        contactList.map((contact)=>{
                            return <Card contact={contact} deleteContactHandler={deleteContactHandler}/>
                        })
                    ):(<div>Empty List</div>)
                }
                
            </div>
        </div>
    );
};

export default ContactList;