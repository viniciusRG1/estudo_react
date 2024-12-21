import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name] = useState("cazé")
    return (<div>
        <h1>Isso será exibido?</h1>
        {x && <p>se x for true sim!</p>}
        {!x && <p>agora x é falso</p>}
        <h1>renderização</h1>
        {name === "cazé" ? (
            <div>
                <p>o nome é cazé</p>
            </div>
        ) : (
            <div>
                <p>nome não encontrado</p>
            </div>
        )}
    </div>);
}

export default ConditionalRender;