
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import { DarkModeProvider } from './components/color';

function App() {
  return (
    <div className="App">
       <DarkModeProvider>
      <Header/>
      <Routes>
     
        <Route path='/' element={<Home/>} ></Route>
  
          <Route path='/About' element={<About/>} ></Route>
          <Route path='/Contact' element={<Contacts/>} ></Route>
          <Route path='/Skills' element={<Skills/>} ></Route>
          <Route path='/Qualifications' element={<Qualifications/>} ></Route> 
      </Routes>
      </DarkModeProvider>
    </div>
  );
}

export default App;
