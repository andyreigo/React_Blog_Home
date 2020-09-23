import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyImage from './assets/vegeta.png';

const App = () => {
    return (
      <div>
          <div>I STILL GOT IT BITCHES</div>
          <img src={MyImage} />
      </div>
    );
  };

  export default App;