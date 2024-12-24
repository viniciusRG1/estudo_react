
import './App.css';

import Events from './components/Events';

import First from './components/FirstComponent';

import TemplateExpressions from './components/TemplateExpressions';

import FComponent from './components/Component';

import Vascudo from './assets/vascudo.jpeg'

import Vegetti from './assets/vegetti.jpeg'

import ManageData from './components/ManageData';

import ListRender from './components/ListRender';

import ConditionalRender from './components/ConditionalRender';

import ShowUserName from './components/ShowUserName';

import CarDetails from './components/CarDetails';

import Fragment from './components/Fragment';

import Container from './components/Container';

import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const car = [
    {id: 1, brand: "FERRARI", color: "VERMELHA", novo: true, km: 300},
    {id: 1, brand: "AUDI", color: "PRETA", novo: true, km: 700},
    {id: 1, brand: "JEEP", color: "PRATA", novo: false, km: 330},
  ]

  const pessoas = [
    {nome: "cazé puro love", idade: 23, profissao:"programador"},
    {nome: "tobias tobastico", idade: 25, profissao:"garoto de programa"},
    {nome: "ana laura", idade: 21, profissao:"fisioterapeuta"},
    {nome: "joão miguel", idade: 15, profissao:"estudante"},
  ]

const [message, setMessage] = useState("");

const handleMessage = (msg) => {
  setMessage(msg);
}

function showMessage(){
  console.log("aqui foi escrito uma função em prop");
}

  return (
    <div className="App">
      <h1>Hello World React</h1>
      <div>
      <p>
        amo programar
      </p>
      </div>
      <FComponent/>
      <First/>
      <TemplateExpressions/>
      <Events/>
      <div>
        <img src={Vascudo} alt="vascudo"/>
      </div>
      <div>
        <img src={Vegetti} alt="vegetti" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name="cazé"/>
      <CarDetails brand="UNO " km={100} color="BRANCO " novo = {true} />
      <CarDetails brand="FIESTA " km={200} color="LARANJA " novo = {true}/>
      <CarDetails brand="HB20 " km={300} color="PRATA " novo = {false}/>
      {car.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} novo={car.novo}/>
      ))}
      <Fragment  propFragment="mandei um oi, mas poderia ser uma variavel"/>
      <Container my_value="testando">
        <p>aqui tem um conteudo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {pessoas.map((pessoas) => (
        <UserDetails nome={pessoas.nome} idade={pessoas.idade} job={pessoas.profissao} />
      ))}
    </div>   
  );
}

export default App;
