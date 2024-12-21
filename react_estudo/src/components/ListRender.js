import {useState} from 'react'


const ListRender = () => {
    const [list] = useState(["Vinicius", "Cazé", "Tobas"]);

    const[user, setUser] = useState([
        {id: 1, name:"Vinicius", age: 22},
        {id: 2, name:"Cazé", age: 23},
        {id: 3, name:"Tobias", age:24},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random()*4);

        setUser((prevUser) =>
        {
            return prevUser.filter((user) => randomNumber !== user.id)
        }
    );
    };
    return (
        <div>
            <ul>
                {list.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <ul>
                <button onClick={deleteRandom}>delete randomicamente um usuário</button>
            </ul>
        </div>
    );
};

export default ListRender