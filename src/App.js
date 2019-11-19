import React from 'react';
import Signup from "./Components/Signup"
import { Auth } from  'aws-amplify'

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
