import React from 'react';
import LandingPage from './Component/LandingPage';
import SecondPage from './Component/SecondPage';

function App() {
  return (
    <div className="App">
      <LandingPage
        productName="Product Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat vehicula quam, at rutrum metus vulputate egestas. Praesent diam quam,"
        additionalText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat vehicula quam,"
      />

      <SecondPage/>
    
 </div>
  );
}

export default App;
