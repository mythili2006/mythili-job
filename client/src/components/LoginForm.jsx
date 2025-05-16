import React, { useState } from 'react';
import { login } from '../services/authService';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
