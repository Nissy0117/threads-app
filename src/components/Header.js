import React from 'react'
import '../css/Header.css';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>掲示板App</h1>
        </Link>
      </header>
    </div>
  )
}

export default Header