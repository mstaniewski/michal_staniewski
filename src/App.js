import React from "react";
import { Route } from "react-router-dom";

import ListView from "pages/ListView";
import AddView from "pages/AddView";

import Navigation from "components/Navigation";

const App = () => (
  <div className="App">
    <Navigation />

    <div className="container">
      <Route exact path="/" component={ListView} />
      <Route exact path="/add" component={AddView} />
    </div>
  </div>
);

export default App;
