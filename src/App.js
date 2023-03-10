import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';
import {Banner} from './Components/Banner';
import {Tech_Stack} from './Components/Tech_Stack';
import {Footer} from './Components/Footer';
import {About} from './Components/About';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <About/>
     <Tech_Stack/>
     <Footer/>
    </div>
  );
}

export default App;
