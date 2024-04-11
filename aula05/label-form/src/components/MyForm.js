import style from './MyForm.css'

const MyForm = () => {
  return (
    <div>
      {/* 1 - criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome"/>
          <label htmlFor="name">E-mail:</label>
          <input type="text" name="name" placeholder="Digite seu e-mail"/>
        </div>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default MyForm
