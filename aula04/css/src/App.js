import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';

function App() {

  const n = 15;
  const [name] = useState("Matheus")

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
    </div>
  );
}

export default App;
