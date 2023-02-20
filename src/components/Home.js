import React from 'react';
import '../css/Home.css';
import Header from './Header'
import Threads from './Threads'

function Home() {

  return (
    <div className='home'>
      <Header />
      <div className='wrapper'>
        <Threads />
      </div>
    </div>
  )
}

export default Home