import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    { id: 1, brand: 'Ferrai', model: 'Spider', color: 'Red', milles: 0, newCar: true},
    { id: 2, brand: 'Ford', model: 'Ranger', color: 'Plate', milles: 526, newCar: false },
    { id: 3, brand: 'chevrolet', model: 'Silverado', color: 'Grey', milles: 55589, newCar: false },
    { id: 4, brand: 'BMW', model: 'I8', color: 'White', milles: 0, newCar: true },
    { id: 5, brand: 'Lamborgine', model: 'Aventador', color: 'Magenta', milles: 0, newCar: true },
  ]

  return (
    <div className="App">
      {cars.map((car) => (
        <CarDetails 
          key={car.key}
          brand={car.brand}
          model={car.model}
          color={car.color}
          milles={car.milles}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;
