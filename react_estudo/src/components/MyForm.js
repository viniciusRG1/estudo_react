import React, { useState } from "react";

import './MyForm.css'

const My_form = ({user}) =>{

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email: '')
    const [bio, setBio] = useState(user ? user.bio: '')
    const [role, setRole] = useState(user ? user.role: '')

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("enviando formulario")
        console.log(name, email, bio, role)

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    } 
    return(
        <form onSubmit={handleSubmit}>
            <div>

                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <span>
                Bio:
            </span>
            <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            <label>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">editor</option>
                    <option value="admin">adiministrador</option>
                    <option value="negociador">negociador</option>
                </select>
            </label>
            <input type="submit" value="enviar"/>
        </form>
    )
}

export default My_form;