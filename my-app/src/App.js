import React from "react";

import "assets/scss/style.scss";
import { BrowserRouter as Router,Route } from 'react-router-dom'
import LandingPage from "pages/LandingPage";
//import Example from "pages/example";
//import ExampleDate from "pages/exsampleDate";
//import ExampleBreadcrumb from "pages/exampleBreadcrumb";
import DetailPage from "pages/DetailsPage";
import Checkout from 'pages/Checkout'



function App() {
  return <div className="App">
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/properties/:id" component={DetailPage} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  
  </div>;
}

export default App;
