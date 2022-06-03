import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Details from './components/Details/Details';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/home/:id' element={<Details/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
