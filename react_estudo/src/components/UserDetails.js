import React from "react";

const UserDetails = ({nome, idade, job}) => {
    return (
        <div>
            <h2>pessoa no banco de dados</h2>
            <ul>
                <li>nome: {nome}</li>
                <li>idade: {idade}</li>
                <li>trabalho: {job}</li>
                {idade >= 18 ? (
                    <li>tem permissão para dirigir</li>
                ) : (
                    <li>não tem permissão para dirigir</li>
                )}
            </ul>
        </div>
    )
}

export default UserDetails;