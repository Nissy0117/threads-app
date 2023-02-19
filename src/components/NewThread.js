import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../css/NewThread.css'
import '../App.css';
import Header from './Header'

function NewThread() {

  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setPost] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    axios.get(`${baseURL}/threads`).then((response) => {
      setPost(response.data);
    })
  }, []);

  function createPost() {
    axios
    .post(`${baseURL}/threads`, {
      id: 1,
      title: inputRef.current.value
    })
    .then((response) => {
      setPost(response.data);
    })
    .catch(error => {
      console.log(error)
    })
  }
  console.log(post);

  return (
    <div className='newthread'>
      <Header />
      <div className='wrapper'>
        <p className='head'>新規スレッドを作成</p>
        <form className='post-new-thread'>
          <input
            ref={inputRef}
            type="text"
            placeholder='スレッドタイトルを入力'
          />
        </form>
        <Link to="/home">
          <button className='create-btn' onClick={createPost}>作成</button>
        </Link>
        <Link to="/home">
          <p className='back-to-home'>Homeへ戻る</p>
        </Link>
      </div>
    </div>
  )
}

export default NewThread