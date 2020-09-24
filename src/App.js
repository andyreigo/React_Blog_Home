import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchAppBar from "./SearchAppBar"

const App = () => {
    return (
      <div>
     <SearchAppBar/>
      </div>
    );
  };

  export default App;