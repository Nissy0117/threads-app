import React from 'react';
import '../css/Home.css';
import Header from './Header'
import Threads from './Threads'
import Footer from './Footer';

function Home() {

  return (
    <div className='home'>
      <Header />
      <div className='wrapper'>
        <Threads />
      </div>
      <Footer />
    </div>
  )
}

export default Home