import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// import logo from './logo.svg';
// import './App.css';

import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import FaqPage from './pages/Faq'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
// import NavbarClone from './components/NavbarClone'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Navbar id="navbar-clone"/>
        {/* <NavbarClone /> */}
        <Sidebar />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
