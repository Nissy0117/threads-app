import { useState, useEffect } from 'react'
import {
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import '../css/Threads.css';
import NewThreadBtn from './NewThreadBtn';
import Thread from './Thread';

function Threads() {
  const [threads, setThreads] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {
        setThreads(data)
      })
  }, [])

  const useThreads = threads.map((thread, title) => {
    return (
      <div key={thread.id}>
        <dl className='new-thread-dl'>
          <Link to={`/threads/${thread.id}/posts`}>
            <dt>{thread.title}</dt>
          </Link>
          <dd>ID：{thread.id}</dd>
        </dl>
      </div>
    )
  })

  return (
    <div>
      <p className='head'>新着スレッド一覧</p>
      <NewThreadBtn />
      <div className='threads-area'>
        {useThreads}
      </div>
    </div>
  )
}

export default Threads;