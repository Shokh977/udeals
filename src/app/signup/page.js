'use client'

import React, { useState } from 'react';
import useStoreAuth from '@/store/useAuthStore'

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error} = useStoreAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>} {/* Display error message if exists */}
    </form>
  );
};

export default SignupForm;
