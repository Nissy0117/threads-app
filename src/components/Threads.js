import React from 'react'
import '../css/Threads.css';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NewThreadBtn from './NewThreadBtn';
import Post from './Posts';


function Threads() {
  const [threads, setThreads] = useState([]);
  const navigate = useNavigate();

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
        <Link to={{ pathname: "/posts", state: {thread} }} >
          <dl className='new-thread-dl'>
            <dt>{thread.title}</dt>
            <dd>ID：{thread.id}</dd>
          </dl>
        </Link>
      </div>
    )
  })


  return (
    <div>
      <p className='head'>新着スレッド一覧</p>
      <NewThreadBtn />
      {useThreads}
      
    </div>
  )
}

export default Threads