import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';

function App() {

  const n = 15;
  const [name] = useState("Matheus")
  const redTitle = true

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* CSS Inlyne  */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>Este título vai ter classe dinâmica</h2>

      <h2 style={name === "Matheus" ? ({color: "green", backgroundColor: "#000"}) : null}>Teste nome</h2>

      <h2 className={redTitle ? "red-title" : "title"}>Esse título vai ter a classe dinâmica</h2>
    </div>
  );
}

export default App;
