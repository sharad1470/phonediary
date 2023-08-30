
import './App.css';
import Header from './components/header/header';
import ContactList from './components/contactlist/ContactList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from './common/api/contacts';
import AddContact from './components/AddContact/AddContact';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import EditContact from './components/editContact/EditContact';
import { useDispatch } from 'react-redux';
import {addContacts,deleteContact} from './redux/actions/actions';
function App() {
  const dispatch=useDispatch();
  


 

  


  useEffect(()=>{

    const getContactList=async ()=>{
      const response=await api.get('/contacts');
      if(response)
      dispatch(addContacts(response.data));
        // setContactList(response.data);
        // setSearchResult(response.data);
       
    }
    getContactList();
  },[])

  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route 
          path='/'
          exact
          element={<ContactList />}
        />

        <Route 
          path='/add-contact'
          exact
          element={<AddContact />}
        />
         <Route 
          path='/edit-contact'
          exact
          element={<EditContact />}
        />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
