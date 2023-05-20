import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import Contact from './ContactList';
function App() {
  return (
   <div>
    <Header/>
    <AddContact/>
    <Contact/>

   </div>
  );
}

export default App;
