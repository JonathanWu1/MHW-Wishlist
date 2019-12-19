import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main.js'
// import { BrowserRouter as Router} from 'react-router-dom';
// import { Route } from 'react-router'
function App() {
  return (
    <div className="App">
      {/* <Route exact path={`/mhw-wishlist`} render={ (routerProps) => } /> */}
      < Main />
    </div>
  );
}

export default App;
