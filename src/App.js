import honk from './honk.JPG';
import './App.css';
import useSound from 'use-sound'
import mySound from './mySound.mp3'

function App() {
  const [playSound] = useSound(mySound)
  const function1 = (event) => {
    playSound()
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={honk}
          style={{ height: "100svh" }}
          onTouchStart={function1}
          onClick={function1}
        />
      </header>
    </div>
  );
}

export default App;
