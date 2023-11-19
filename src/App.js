import './App.css';
import Calculator from './componenets/Calculator/Calculator';

const numOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operandsOptions = ['+', '-', 'X', '÷', '%'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Refresh browser to reset Calculator</h1>
      <Calculator
        numOptions={numOptions} 
        operandsOptions={operandsOptions}
        />
      </header>
    </div>
  );
}

export default App;
