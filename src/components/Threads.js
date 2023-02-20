import React from 'react'
import '../css/Threads.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import NewThreadBtn from './NewThreadBtn';
import Post from './Post';


function Threads() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {
        setThreads(data)
        console.log(data)
      })
  }, [])

  const useThreads = threads.map((thread, title) => {
    return (
      <div key={thread.id}>
        <Link to="/post">
          <dt>{thread.title}</dt>
          <dd>ID：{thread.id}</dd>
        </Link>
      </div>
    )
  })

  return (
    <div>
      <p className='head'>新着スレッド一覧</p>
      <NewThreadBtn />
      <dl className='new-thread-dl'>
        {useThreads}
      </dl>
    </div>
  )
}

export default Threads