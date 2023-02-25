import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import App from '../App'
import Header from './Header'
import Threads from './Threads'
import PostThread from './PostThread'

function Thread() {
  const { threadid } = useParams();
  const [postsList, setPostslist] = useState([]);

  useEffect(() => {
    fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadid}/posts`, {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {
        setPostslist(data)
      })
  }, [])

  console.log(postsList.posts)
  const postArray = postsList.posts
  console.log(postArray)

  const posts = postArray?.map((post) => {
    // console.log(post.post);
    return (
      <div>
        <ul>
          <li>{post.post}</li>
        </ul>
      </div>
    )
  })

  return (
    <div>
      <Header />
      {posts}
      <PostThread
        threadId={postsList.threadId}
        setPostslist={setPostslist}
      />
    </div>
  )
}

export default Thread