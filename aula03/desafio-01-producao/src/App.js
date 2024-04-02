import './App.css';
import Section from './components/Section';

import City from "./assets/city.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Joaquim";
  const [userName] = useState("Maria")

  return (
    <div className="App">
      <Section />
      <div>
        <img src="img/paisagem-natural.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={userName} />
        {/* destructing */}
        <CarDetails brand="VW" km={100000} color="Azul" />
      </div>
    </div>
  );
}

export default App;
