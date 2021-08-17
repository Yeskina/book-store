import './book-description.scss'

const BookDescription = ({ bookName, author, bookDescription, authorLink }) => {
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
