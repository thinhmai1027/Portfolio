
import './App.css';
import Intro from './components/intro/Intro.jsx'
import ProductList from './components/productList/ProductList.jsx'
import React, { useState, useEffect } from 'react';



function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
  return (
    <div>
      {
        loading ?
          <div className="loader">
            <div className="text content-center">
              <h1 className="animate__fadeOut">Hello World</h1>
            </div>
          </div>
        :
      <div className="app animate__fadeIn">
        <Intro />
        <ProductList />
      </div>
      }
    </div>
  );
}

export default App;
