import React, { useState } from 'react';
import { register } from '../services/authService';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('applicant');
  const [error, setError] = useState(''); // to display error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ name, email, password, role });
      alert('User registered successfully!');
      // Optionally redirect to login page or clear form
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="applicant">Applicant</option>
        <option value="recruiter">Recruiter</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
