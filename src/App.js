import honk from './honk.JPG';
import './App.css';

function App() {
  const function1 = (event) => {
    alert("Touch Start");
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
