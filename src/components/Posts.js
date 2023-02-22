import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from './Header'
import Threads from './Threads'

function Posts() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
        <Header />
        <p></p>
    </div>
  )
}

export default Posts