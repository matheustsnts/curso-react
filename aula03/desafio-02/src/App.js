import './App.css';

import UserDetails from './components/UserDetails';

function App() {

  const users = [
    { nome: 'João', idade: 25, profissao: 'Engenheiro' },
    { nome: 'Maria', idade: 30, profissao: 'Médica' },
    { nome: 'Pedro', idade: 17, profissao: 'Estudante' }
  ];

  return (
    <div className="App">
      {users.map((user, index) => (
        <UserDetails key={index} user={user} />
      ))}
      
    </div>
  );
}

export default App;
