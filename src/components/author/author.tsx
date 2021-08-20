import React from 'react'

import './author.scss'

interface AuthorInfo {
  author: string
}

const Author: React.FC<AuthorInfo> = ({ author }) => {
  return (
    <div className="author-container">
    <h2>About the Author</h2>
    <div className="biography">
      {author}
    </div>
  </div>
  )
}

export default Author