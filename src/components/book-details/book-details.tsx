import React from 'react'
import './book-details.scss'

interface BookDetailsInfo {
  age: string
  pages: string
  language: string
  publisher: string
  weight: string
  size: string
}

const BookDetails: React.FC<BookDetailsInfo> = ({ publisher, language, pages, age, weight, size }) => {
  return (
    <div>
    <h2>Product details</h2>
    <ul className="book-details">
      <li>
        <b>Publisher :</b> {publisher}
      </li>
      <li>
        <b>Language :</b> {language}
      </li>
      <li>
        <b>Hardcover :</b> {pages}
      </li>
      <li>
        <b>Reading age :</b> {age}
      </li>
      <li>
        <b>Item Weight :</b> {weight}
      </li>
      <li>
        <b>Dimensions :</b> {size}
      </li>
    </ul>
  </div>
  )
}

export default BookDetails