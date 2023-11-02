import React from 'react';
import './App.css';
import Name from './Component/Name';
import Price from './Component/Price';
import Description from './Component/Description';
import Image from './Component/Images';
import Card from './Card'; // Import the Card component
import product from './product';

const firstName = "Ibrahim oluwanishola"; // Replace with your actual first name

function App() {
  return (
    <div className="App">
      <div className="card">
        <Image imagePath={product.imagePath} />
        <div className="card-body">
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </div>
      </div>
      <p>Hello, {firstName ? firstName : "there!"}</p>
      {/* Using the Card component */}
      <Card product={product} />
      
    </div>
  );
}

export default App;