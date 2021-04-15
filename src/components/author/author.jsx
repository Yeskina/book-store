import './author.scss'

const Author = ({ author }) => {
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