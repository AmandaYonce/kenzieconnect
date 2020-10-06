import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Landing from './components/landingpage'
import PenPal from './components/penpal'
import Profile from './components/profile'
import Auth from './components/loginSignup'


class App extends Component {
  render(){

  
  return (
    <BrowserRouter>
        <Route exact path="/" component={Auth} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/messagefeed/:username" component={PenPal}/>
        {/* <Route path="*" component={NotFound} /> */}
    
  </BrowserRouter>
  );
}
}

export default App;
