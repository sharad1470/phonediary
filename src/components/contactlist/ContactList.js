import React from 'react';
import './ContactList.css';
import Card from './Card/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from '../../redux/actions/actions';
const ContactList = () => {
    const dispatch=useDispatch();
    
    const contactList=useSelector((state)=>state.contacts.contacts);
    const query=useSelector((state)=>state.contacts.query);
    const filteredList=contactList.filter((item)=>{
     return   Object.values(item).join(" ").toLowerCase()
     .includes(query.toLowerCase())
    });
    return (
        <div className='contactlist'>
            <div className='contactlist-search-button'>
            <div className='contactlist-search'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder='Search contact in the list'
                    value={query}
                    onChange={(e)=>dispatch(searchContact(e.target.value))}
                />
            </div>
            <Link style={{textDecoration:'none', color:'black'}} to='/add-contact'>
            <div  className='add-button'>Add Contact</div>
            </Link>
            </div>
            <div className='contactlist-info'>
                {
                    filteredList.length?(
                        filteredList.map((contact)=>{
                            return <Card contact={contact} 
                            //deleteContactHandler={deleteContactHandler}
                            />
                        })
                    ):(<div>Empty List</div>)
                }
                
            </div>
        </div>
    );
};

export default ContactList;