import './App.css';

import { Navbar } from './Components/index'
import { Movies } from "./Container";

function App() {

  return (
    <div className="app">
      <Navbar/>
        <Movies/>
    </div>
  );
}

export default App;
