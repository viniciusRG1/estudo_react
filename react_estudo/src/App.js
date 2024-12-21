
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

function App() {
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
      <CarDetails brand="UNO" km={100} color="BRANCO"/>
    </div>   
  );
}

export default App;
