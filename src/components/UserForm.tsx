import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Save user details to local storage
    const userDetails = { name, phone, email };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to the second page
    navigate('/second-page');
  };

  return (
    <div>
      <h1>User Information</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <label>Phone number:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required /><br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
