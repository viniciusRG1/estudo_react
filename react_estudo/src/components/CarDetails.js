import React from "react";

const CarDetails = ({brand, km, color}) =>{
    return <div>
        <h2>
            detalhes do carro
        </h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>quilometragem: {km}</li>
            <li>cor: {color}</li>
        </ul>
    </div>
};

export default CarDetails;