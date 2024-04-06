import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "black", color: "#D4AF37" }}>Detalhes de Carros</h1>
      <CarDetails modelo="Toyota Camry" ano={2022} cor="Prata" bgCor="#c8e6c9" />
      <CarDetails modelo="Honda Civic" ano={2021} cor="Vermelho" bgCor="#ffcdd2" />
      <CarDetails modelo="Ford Mustang" ano={2020} cor="Azul" bgCor="#bbdefb" />
    </div>
  );
}

export default App;
