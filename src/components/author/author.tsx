import React from 'react'
import { AuthorInfo } from '../interface'

import './author.scss'

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