import style from './MyForm.css'
import {useState} from 'react';

const MyForm = () => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      {/* 1 - criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName}/>
          <label htmlFor="email">E-mail:</label>
          {/* <input type="text" name="email" placeholder="Digite seu e-mail" onChange={handleName}/> */}
        </div>
        {/* 2 - label envolvendo input */}
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default MyForm
