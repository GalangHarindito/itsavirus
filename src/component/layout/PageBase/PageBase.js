import React, { useEffect } from 'react';
import Header from '../../Header';
import TopHeader from '../../TopHeader';
import './style.css';

export default function PageBase({ children }) {
  useEffect(() => {
   
    const app = document.getElementById('root');
    app.className = 'pagebase';
  }, []);


  return (
    <>
      <TopHeader />
      <Header />
      <main className='main'>
        {children}
      </main>
    </>
  );
}