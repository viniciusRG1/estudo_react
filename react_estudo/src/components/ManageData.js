
import {useState} from "react";

const ManageData = () => {

    let somaData = 10;

    const[number, setNumber] = useState(15);

    console.log(setNumber)

    return (
        <div>
            <div>
                <p>Valor: {somaData}</p>
                <button onClick={() => (somaData = 15)}>Mudar Variavel</button>
            </div>

            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(45)}>Mudar Estado</button>
            </div>
        </div>
    )
}

export default ManageData