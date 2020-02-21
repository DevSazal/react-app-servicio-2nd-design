import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import initStore from './store'


// import logo from './logo.svg';
// import './App.css';

import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import FaqPage from './pages/Faq'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
// import NavbarClone from './components/NavbarClone'


const store = initStore()

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
