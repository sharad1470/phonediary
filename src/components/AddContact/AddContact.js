import React, { useState } from 'react';
import './AddContact.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../../common/api/contacts'
import { addContact } from '../../redux/actions/actions';
const AddContact = () => {
    const dispatch=useDispatch();
    const [name,setName]= useState("");
    const [phone,setPhone]=useState("");
      const submitForm= async (e)=>{
        e.preventDefault();
        if(name=="" || phone==""){
            alert('please enter all details')
            return;
        }


        const contact={
            id:Date.now.toString,
            name,
            phone
        }
        console.log(contact);

        const response=await api.post('/contacts',contact);
        dispatch(addContact(contact));
        window.location='/';
        return;
    }
    return (
        <div className='add-contact absolute-center'>

            <form className='form absolute-center' onSubmit={submitForm}>
                {/* <div className='form-elements absolute-center'> */}
                    <div className='form-input'>
                        <input 
                            placeholder='Enter Name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                    </div>
                    <div className='form-input'>
                        <input 
                            placeholder='Enter Phone no.'
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            />
                    </div>
                    <div className='submit-button absolute-center' >
                        <button>Submit</button>
                    </div>

                    <Link style={{textDecoration:'none', color:'black'}} to='/'>
                    <div style={{cursor:'pointer'}} className='submit-button absolute-center' >
                        Back
                    </div>
                    </Link>
                {/* </div> */}

            </form>
        </div>
    );
};

export default AddContact;