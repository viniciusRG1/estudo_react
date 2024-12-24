import React from "react";

import Styles from "./CarDetails.module.css"

const CarDetails = ({key, brand, km, color, novo}) =>{
    return <div>
        <h2>
            detalhes do carro
        </h2>
        {brand === "FERRARI" &&(<ul className={Styles.Ferrari}>
            <li>id: {key}</li>
            <li>Marca: {brand}</li>
            <li>quilometragem: {km}</li>
            <li>cor: {color}</li>
            {novo === true ? (
                <li>o carro é novo</li>
            ):(
                <li>o carro é velho</li>
            )}
        </ul>)}
        {brand === "AUDI" &&(<ul className={Styles.Audi}>
            <li>id: {key}</li>
            <li>Marca: {brand}</li>
            <li>quilometragem: {km}</li>
            <li>cor: {color}</li>
            {novo === true ? (
                <li>o carro é novo</li>
            ):(
                <li>o carro é velho</li>
            )}
        </ul>)}
        {brand === "JEEP" &&(<ul className={Styles.Jeep}>
            <li>id: {key}</li>
            <li>Marca: {brand}</li>
            <li>quilometragem: {km}</li>
            <li>cor: {color}</li>
            {novo === true ? (
                <li>o carro é novo</li>
            ):(
                <li>o carro é velho</li>
            )}
        </ul>)}
    </div>
};

export default CarDetails;