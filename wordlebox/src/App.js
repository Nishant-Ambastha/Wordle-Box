import logo from './logo.svg';
import './App.css';
import ReturnRandomnumber from './componant/ReturnRandomNumber';

function App() {
  return (
    <>
      {ReturnRandomnumber(5, 10)}
    </>
  );
}

export default App;
