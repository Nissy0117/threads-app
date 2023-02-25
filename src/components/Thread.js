import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../css/Thread.css";
import App from '../App';
import Header from './Header';
import Threads from './Threads';
import PostThread from './PostThread';

function Thread() {
  const { threadid } = useParams();
  const [postsList, setPostsList] = useState("");

  useEffect(() => {
    fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadid}/posts`, {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {
        setPostsList(data)
      })
  }, [])
  console.log(postsList)

  const postArray = postsList.posts

  const posts = postArray?.map((post) => {
    return (
      <div key={post.id}>
        <ul className='postlist-ul'>
          <li className='postlist-li' key={post.id}>{post.post}</li>
        </ul>
      </div>
    )
  })

  return (
    <div>
      <Header />
      <div className='post-list-area'>
        {posts}
      </div>
      <PostThread
        threadId={postsList.threadId}
      />
    </div>
  )
}

export default Thread;