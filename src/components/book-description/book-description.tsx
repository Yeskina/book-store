import React from 'react'

import './book-description.scss'

interface BookDescriptionInfo {
  bookName: string
  author: string
  bookDescription: () => void
  authorLink: string
}

const BookDescription: React.FC<BookDescriptionInfo> = ({ bookName, author, bookDescription, authorLink }) => {
  return (
    <div className="book-description">
      <h2>{bookName}</h2>
      <p>
        by <a href={authorLink} target="blank">{author}</a>
      </p>
      {bookDescription}
    </div>
  )
}

export default BookDescription
