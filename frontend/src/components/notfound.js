import React, { Component } from 'react';
import Header from "./header"

class NotFound extends Component {
  render(){
  return (
    <div >
        <Header/>
        <h1>Not Found Page for 400 errors</h1>
    </div>
  );
}
}

export default NotFound;