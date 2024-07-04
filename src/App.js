import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/1-header/Header";
import './App.css';
import Slider from "./components/2-slider/Slider";
import Product from "./components/3-product/Product";
import About from './components/4-About/About';
import Foooter from './components/5-Foooter/Foooter';
import Services from './components/6-Services/Services';
import ServicesList from './components/6-Services/ServicesList';
import Contact from './components/7-Contact/Contact';
import ContactLIst from './components/7-Contact/ContactLIst';
import ProductDetails from './components/8-ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Slider />
          <Product />
        </>} />
    
        <Route path="/About" element={<>
          <About />
        </>} />
    
        <Route path="/Services" element={<>
          <Services />
          <ServicesList/>
        </>} />
  
        <Route path="/Contact" element={<>
          <Contact />
          <ContactLIst/>
        </>} />


        <Route path="product/:productId" element={<>
          <ProductDetails />
        </>} />




      </Routes>

      <Foooter/>
    </div>
  );
}

export default App;
