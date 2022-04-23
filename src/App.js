import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import { Getademo } from './components/Getademo';
import { Getstartedfee } from './components/Getstartedfee';
import { Navbar } from './components/Navbar';
import { Pricing } from './components/Pricing';
import { Products } from './components/Products';
import { Resources } from './components/Resources';
import { Signin } from './components/Signin';
import { Whycoschedule } from "./components/Whycoschedule";
import { Homepage } from "./components/Homepage";
import { Requestyourdemo } from './components/Requestyourdemo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar id="navbar"/>
      <Routes>
        <Route path='getademo' element={<Getademo />}></Route>
        <Route path='getstartedfee' element={<Getstartedfee />}></Route>
        <Route path='pricing' element={<Pricing />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='resources' element={<Resources />}></Route>
        <Route path='signin' element={<Signin />}></Route>
        <Route path='whycoschedule' element={<Whycoschedule />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/requestyourdemo" element={<Requestyourdemo />}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
