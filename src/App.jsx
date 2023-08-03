import './App.css';
import { puppyList } from './data.js';
import { useState } from 'react';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppy) {
    setFeatPupId(puppy.id);
    console.log("puppy id: ", puppy.id);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <h1 className="logo">Our Puppy Pals!</h1>
      <h3 className="read-the-docs">Select one to learn their information:</h3>
      {puppies.map((puppy) => {
        return (
          <p onClick={() => handleClick(puppy)} key={puppy.id} className="puppy-card">
            {puppy.id}. {puppy.name}
          </p>
        );
      })}
      {featuredPup && (
        <div className="card">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li><b>Age:</b> {featuredPup.age}</li>
            <li><b>Email:</b> {featuredPup.email}</li>
            <li>
              <b>Cuteness status:</b> {featuredPup.isCute ? "Absolutely Adorable" : "Ooof, not really :/"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

