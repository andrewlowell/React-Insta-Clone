import React from 'react';

const authenticate = App => Login => 
  class extends React.Component {
    render() {
      if (localStorage.getItem('user')) {
        // If there is a "user" item in localStorage, render <FirstComponent />
        return <App />;
      }
      // If there is NOT a "user" item in localStorage, render <SecondComponent />
      return <Login />;
    }
  };

  export default authenticate;