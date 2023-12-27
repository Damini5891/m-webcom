import './App.css';
import Navbar from './components/Navbar'
import Coverpage from './components/Coverpage'
import Features from './components/Features'
import Carousel from './components/Carousel'



function App() {
  return (
    <div className="App">
    <Navbar/>
  <Coverpage/>
  <Features/>
  <Carousel/>
    </div>
  );
}

export default App;
