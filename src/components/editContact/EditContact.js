import React, { useState } from 'react';
import './EditContact.css';
import { Location, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/actions/actions';
import api from '../../common/api/contacts';
const EditContact = () => {
    const location=useLocation();
    const dispatch=useDispatch();

    const {id,name, phone}=location.state;

    const [newname,setNewName]=useState(name);
    const [newPhone, setNewPhone]=useState(phone);

    

    const editHandler=async()=>{

        const data={
            id,
            name:newname,
            phone:newPhone
        }
        const response=await api.put(`/contacts/${data.id}`,data);
        dispatch(editContact(data));
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