import './App.css';
import Section from './components/Section';

import City from "./assets/city.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
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
      </div>
    </div>
  );
}

export default App;
