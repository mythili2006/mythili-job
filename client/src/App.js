import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing the components directly
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import PostJob from './pages/PostJob';
import Applications from './pages/Applications';
import Profile from './pages/Profile';

function App() {
  // Define the routes directly in App.js
  const routes = [
    { path: '/', component: Home },
    { path: '/jobs', component: Jobs },
    { path: '/post-job', component: PostJob },
    { path: '/applications', component: Applications },
    { path: '/profile', component: Profile }
  ];

  return (
    <div>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
