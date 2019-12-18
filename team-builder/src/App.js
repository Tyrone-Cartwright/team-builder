import React, { useState } from 'react';
import Members from './components/Members';

import MemberForm from './components/MemberForm';


import './App.css';


function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      member: 'Ronald Brennan',
      email: 'rbrennan@yada.com',
      role: 'Full Stack Developer'
    }
  ])

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      member: member.member,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }



  return (
    <div className="App">
      <h1>Private Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
