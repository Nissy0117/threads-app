import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NewThreadBtn.css'

function NewThreadBtn() {
  return (
    <div>
      <Link to="/newthread">
        <button className='new-thread-btn'>スレッドを立てる</button>
      </Link>
    </div>
  )
}

export default NewThreadBtn