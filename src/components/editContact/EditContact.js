import React, { useState } from 'react';
import './EditContact.css';
import { Location, useLocation } from 'react-router-dom';
const EditContact = ({editContactHandler}) => {
    const location=useLocation();

    const {id,name, phone}=location.state;

    const [newname,setNewName]=useState(name);
    const [newPhone, setNewPhone]=useState(phone);

    const editHandler=()=>{
        const data={
            id,
            name:newname,
            phone:newPhone
        }
        editContactHandler(data);
        window.location='/';
    }

    return (
        <div className='edit-contact'>
            <div className='edit-title absolute-center'>
                Edit Contacts....
            </div>
            <div className='edit-container absolute-center'>
                <div className='edit-box absolute-center'>
                    <div className='edit-item'><input value={newname} onChange={(e)=>setNewName(e.target.value)}/></div>
                    <div className='edit-item'><input value={newPhone} onChange={(e)=>setNewPhone(e.target.value)}/></div>
                    <div className='edit-button' onClick={editHandler}>Edit</div>
                </div>

            </div>
            
        </div>
    );
};

export default EditContact;