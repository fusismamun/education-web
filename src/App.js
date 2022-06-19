import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
            <Route path='/' element= {<Home></Home>}></Route>
            <Route path='/home' element= {<Home></Home>}></Route>
            <Route path='/service' element= {<Service></Service>}></Route>
            <Route path='/about' element= {<About></About>}></Route>
            <Route path='*' element = {<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
