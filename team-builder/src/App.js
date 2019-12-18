import React, { useState } from 'react';


import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Ronald Brennan',
      email: 'rbrennan@yada.com',
      role: ''
    }
  ])



  return (
    <div className="App">
      <h1>Hello Members</h1>
    </div>
  );
}

export default App;
