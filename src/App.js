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
			{/* Router Bug Fixed:: you have use "exact" for root url or you have to keep root url route at the end of all defined route */}
			<Route path="/profile" component={ProfilePage} />
			<Route path="/faq" component={FaqPage} />
            <Route path="/" component={HomePage} />
                {/* 
                  <Route path="/profile">
                    <ProfilePage />
                  </Route>
                  <Route path="/faq">
                    <FaqPage />
                  </Route>
                  <Route path="/">
                    <HomePage />
                  </Route>
                */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
