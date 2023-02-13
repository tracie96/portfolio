import logo from './logo.svg';
import Header from './components/header';
import Mobilemenu from './components/mobilemenu';
import Container from './components/container';
import { useCallback } from "react";

// import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function App() {


  return (
    <div className="App">
      <Header/>

      <Mobilemenu/>
      <Container/>
    </div>
  );
}

export default App;
