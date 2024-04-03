import React from 'react'

const UserDetails = ({ user }) => {
    const { nome, idade, profissao } = user;
    return (
        <div>
            <h2>Detalhes do Usuário</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            {idade >= 18 ? (
                <p>Usuário pode tirar carteira de habilitação</p>
            ) : (
                <p>Usuário não pode tirar carteira de habilitação</p>
            )}
        </div>
    )
}

export default UserDetails
