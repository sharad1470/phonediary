
import './App.css';
import Header from './components/header/header';
import ContactList from './components/contactlist/ContactList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from './common/api/contacts';
function App() {
  const [contactList ,setContactList]=useState([]);

  useEffect(()=>{

    const getContactList=async ()=>{
      const response=await api.get('/contacts');
      if(response)
        setContactList(response.data);
    }
    getContactList();
  },[])
  return (
    <div className="App">
      <Header/>
      <ContactList contactList={contactList}/>
    </div>
  );
}

export default App;
