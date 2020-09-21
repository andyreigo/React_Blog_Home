import React from "react";
import ReactDOM from "react-dom";

import './index.css';

import MyImage from './assets/vegeta.png';

const App = () => {
    return (
      <div>
          <div>Welcome to my-webpack-react-starter</div>
          <img src={MyImage} />
      </div>
    );
  };
ReactDOM.render(<App />, document.getElementById('root'));