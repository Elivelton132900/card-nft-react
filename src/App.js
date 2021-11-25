import Card from "./Components/Card/Card";

import ImagemPrincipal from './Components/Images/image-equilibrium.jpg';
import LogoCripto from './Components/Images/icon-ethereum.svg'
import ImgClock from './Components/Images/icon-clock.svg'
import ImgCriador from './Components/Images/image-avatar.png'

import './index.css'

function App() {
  return (
    <div className="App">
        <Card 
        imgArte={<img src={ImagemPrincipal} alt="Equilibrium"/>}
        titulo="Equilibrium #3429"
        descricao="Our Equilibrium collection promotes balance and calm."
        imgCristal={<img src={LogoCripto} alt="ETH"/>}
        valor="0.041ETH"
        imgClock={<img src={ImgClock} alt="Clock"/>}
        diasRestantes="3 days left"
        imgCriadordaArte={<img src={ImgCriador} alt="Jules Wyvern" />}
        nome="Jules Wyvern"
        />
    </div>
  );
}

export default App;
