import React from 'react';
import NavBar from './Layout/nav';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Layout/footer';

const App = () => (
  <div className="flex flex-col mt-16 min-h-screen">
    <Router>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default App;
