import React,{useState} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
function App() {
  

  const [contacts,setcontacts]= useState([]);

  const addContactHandleer= (contact)=>{
    console.log(contact);
    setcontacts([...contacts,contact]);
    
  }
  return (  
  
   <div className='ui container'>
    <Header/>
    <AddContact addContactHandleer={addContactHandleer}/>
    <ContactList contacts={contacts}/>

   </div>
  );
}

export default App;
