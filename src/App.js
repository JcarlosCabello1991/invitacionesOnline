import './App.css';
import React from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Models from './Models/Models';
import Invitacion1 from './Invitaciones/Invitacion1/Invitacion1';
import Invitacion2 from './Invitaciones/Invitacion2/Invitacion2';
import Invitacion3 from './Invitaciones/Invitacion3/Invitacion3';
import Invitacion4 from './Invitaciones/Invitacion4/Invitacion4';
import Invitacion5 from './Invitaciones/Invitacion5/Invitacion5';
import { CartProvider } from './Context/CartContext';
import Shopping from './Shopping/Shopping';


function App() {  
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Header/>
          <Banner/>
          <Routes>
            <Route exact path="/" Component={Models}/>
            <Route path='/invitacion1' Component={Invitacion1}/>
            <Route path='/invitacion2' Component={Invitacion2}/>
            <Route path='/invitacion3' Component={Invitacion3}/>
            <Route path='/invitacion4' Component={Invitacion4}/>
            <Route path='/invitacion5' Component={Invitacion5}/>
            <Route path='/shopping' Component={Shopping}/>
          </Routes>        
        </Router>
      </div>
    </CartProvider>  
  );
}

export default App;
