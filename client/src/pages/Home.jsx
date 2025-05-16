import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function Home() {
  return (
    <div>
      <h1>Welcome to Job Portal</h1>
      {/* <LoginForm /> */}
      <RegisterForm />
    </div>
  );
}

export default Home;
