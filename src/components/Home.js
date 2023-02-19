import React from 'react';
import '../css/Home.css';
import Header from './Header'
import NewThreadBtn from './NewThreadBtn'
import NewThread from './NewThread'
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