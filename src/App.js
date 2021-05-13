import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/pages/main"
import Portfolio from "./components/pages/portfolio"
import Footer from "./components/Footer";
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path= "/" component={Main}/>
          <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
