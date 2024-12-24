import React from "react";

const CarDetails = ({key, brand, km, color, novo}) =>{
    return <div>
        <h2>
            detalhes do carro
        </h2>
        <ul>
            <li>id: {key}</li>
            <li>Marca: {brand}</li>
            <li>quilometragem: {km}</li>
            <li>cor: {color}</li>
            {novo === true ? (
                <li>o carro é novo</li>
            ):(
                <li>o carro é velho</li>
            )}
        </ul>
    </div>
};

export default CarDetails;