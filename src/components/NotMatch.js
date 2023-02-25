import React from 'react'

function NotMatch() {

  const noMatch = () => {
    alert("ページが存在しません");
  }

  return (
    <div>{noMatch()}</div>
  )
}

export default NotMatch