import React, { useState } from 'react';


const MemberForm = props => {
  const [member, setMember] = useState('');

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(e.target.name);
  }

  const submitMember = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ member: '', email: '', role: '' });
  }

  return (
    <form onSubmit={submitMember}>
      <label htmlFor='member'>Member</label>
      <input 
        id='member'
        type='text'
        placeholder='Member name'
        onChange={handleChange}
        name='member'
        value={member.member}
      />
      <label htmlFor='email'>Email</label>
      <input 
        id='email'
        type='email'
        placeholder='Email'
        onChange={handleChange}
        name='email'
        value={member.email}
      />
      <label htmlFor='role'>Role</label>
      <input 
        id='role'
        type='text'
        placeholder='Role'
        onChange={handleChange}
        name='role'
        value={member.role}
      />
      <button type='submit'>Add New Member</button>
    </form>
  )
}

export default MemberForm;