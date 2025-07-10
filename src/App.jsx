import { useState } from 'react'
import './App.css'

function App() {
  let [coin, setCoin] = useState(0);
  let [power, setPower] = useState(6500);
  let [level, setLevel] = useState(1);
  let [earn, setEarn] = useState(1);
  let [cordinate,setCordinate]=useState({x:0,y:0})
  function addCoin(e) {
    setCordinate({
      x: e.clientX,
      y: e.clientY,
    });

    if (power <= 0) {

      return;
    } else {
      setCoin(coin + earn);
      setPower(power - earn);
      levelUP();
    }
  }
  function levelUP() {
    if (coin == 20){ 
      setLevel(level + 1);
    setEarn(earn + 2);
  } else if (coin == 99) {
    setLevel  (level + 1);
    setEarn(earn + 2);
  } 
  }
  return (
    <div>
      <div className="tel container">
        <h3 className='h3'>Hamster Kombat</h3>
        <div className="cards">
          <div className="card">
            <h3 id='d1'> Earn per tap</h3>
            <h4><i class="fa-solid fa-coins"></i> +{earn}</h4>
          </div>
          <div className="card">
            <h3 id='d2'>Earn per tap</h3>
            <h4>{level}</h4>
          </div>
          <div className="card">
            <h3 id='d3'> Earn per tap</h3>
            <h4><i class="fa-solid fa-coins"></i> +12</h4>
          </div>
        </div>
        <h1 className='h1'><img src="coin.png" alt="" />{coin}</h1>
        <div className="hamster-box" onClick={() => addCoin(this)}>
          <p style={{top:cordinate.y+50,left:cordinate.x,animation: "tepaga 1s linear infinite"}}>+{earn}</p>
          <img src="hamster.png" alt="" />
        </div>
        <div className="dis">
          <h3 className='ii'><i class="fa-solid fa-bolt"></i> {power} / 6500</h3>
          <h3>Boost</h3>
        </div>
        <div className="cards2">
          <div className="card2">
            <img src="Union.png" alt="" />
            <h4>Exchange</h4>
          </div>
          <div className="card2">
            <img src="qr.png" alt="" />
            <h4>Mine</h4>
          </div>
          <div className="card2">
            <i class="fa-solid fa-users"></i>
            <h4>Friends</h4>
          </div>
          <div className="card2">
            <i class="fa-solid fa-coins"></i>
            <h4>Earn</h4>
          </div>
          <div className="card2">
            <img src="coin.png" alt="" />
            <h4>Airdrop</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
