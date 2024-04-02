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
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ];

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
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
        <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
        <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
        ))}
      </div>
    </div>
  );
}

export default App;
