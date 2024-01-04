import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
