import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostThread(props) {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com"
  const inputRef = useRef();
  const navigate = useNavigate();
  const [sendPost, setSendPost] = useState();

  useEffect(() => {
    axios.get(`${baseURL}/threads/${props.threadId}/posts`)
      .then(res => setSendPost(res.data))
  }, [])

  function postBtn() {
    axios.post(`${baseURL}/threads/${props.threadId}/posts`, {
      post: inputRef.current.value
    })
      .then(res => setSendPost(res.data))
    navigate(`/threads/${props.threadId}/posts`)
  }

  return (
    <div className='postthread'>
      <form>
        <input
          ref={inputRef}
          type="text"
          placeholder='テキストを入力'
        />
      </form>
      <button onClick={postBtn}>投稿する</button>
    </div>
  )
}

export default PostThread