
import './App.css';

import Events from './components/Events';

import First from './components/FirstComponent';

import TemplateExpressions from './components/TemplateExpressions';

import FComponent from './components/Component';

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
    </div>
  );
}

export default App;
