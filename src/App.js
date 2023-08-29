
import './App.css';
import Header from './components/header/header';
import ContactList from './components/contactlist/ContactList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from './common/api/contacts';
import AddContact from './components/AddContact/AddContact';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import EditContact from './components/editContact/EditContact';
function App() {
  const [contactList ,setContactList]=useState([]);
  const [searchResult, setSearchResult]=useState([]);
  const [query, setQuery]=useState("");
  console.log(query);


  const addContactHandler= async (contact) =>{
    console.log(contact);

    const request={
      id:Date.now().toString, 
      ...contact
    };
    const response=await api.post('/contacts',request);

    setContactList([...contactList,response.data]);
  };
  const deleteContactHandler=async (id)=>{
    await api.delete(`/contacts/${id}`);

    setContactList( contactList.filter((contact)=>{
      return contact.id!==id
    }))
  } 

  const searchListHandler=(quer)=>{
    setQuery(quer);
    setSearchResult(contactList.filter((contact)=>{

      return Object.values(contact).join(" ")
      .toLowerCase().includes(quer.toLowerCase());

    }))
  }

  const editContactHandler=async(data)=>{
    const response=await api.put(`/contacts/${data.id}`,data);
    
    const updatedList=contactList.map((contact)=>{
      return contact.id===response.id?{...contact,...response.data}:contact;
    })
      setContactList(updatedList);
  } 


  useEffect(()=>{

    const getContactList=async ()=>{
      const response=await api.get('/contacts');
      if(response)
        setContactList(response.data);
        setSearchResult(response.data);
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
          element={<ContactList contactList={query!==""?searchResult:contactList}
          deleteContactHandler={deleteContactHandler}
          query={query}
        searchListHandler={searchListHandler}
          />}
        />

        <Route 
          path='/add-contact'
          exact
          element={<AddContact addContactHandler={addContactHandler}/>}
        />
         <Route 
          path='/edit-contact'
          exact
          element={<EditContact editContactHandler={editContactHandler}/>}
        />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
