import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  
  

  return (
    <>
     {/* <h1>Front-end FYP!</h1> */}
     <Header />
    
     <main className='min-h-[calc(100vh-120px)] pt-16'>
      <Outlet />
     </main>
     
    <Footer />


    {/* ********************************* */}

    


    
    </>
  )
}

export default App
