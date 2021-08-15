import './short-description-line.scss'

import icon1 from '../images/icons/baby-boy.png'
import icon2 from '../images/icons/book.png'
import icon3 from '../images/icons/worldwide.png'
import icon4 from '../images/icons/calendar.png'
import icon7 from '../images/icons/badge.png'
import icon8 from '../images/icons/office.svg'

const DescriptionLine = ({ age, pages, language, date, grade, publisher}) => {
  return (
    <div className="short-description-line">
    <ul className="line">
      <li className="text">
        Reading age <img className="icon" src={icon1} alt="baby"></img>
        <b>{age}</b>
      </li>
      <li className="text">
        Print length <img className="icon" src={icon2} alt="book"></img>
        <b>{pages}</b>
      </li>
      <li className="text">
        Language <img className="icon" src={icon3} alt="planet"></img>
        <b>{language}</b>
      </li>
      <li className="text">
        Publication date <img className="icon" src={icon4} alt="calendar"></img>
        <b>{date}</b>
      </li>
      <li className="text">
        Grade level <img className="icon" src={icon7} alt="calendar"></img>
        <b>{grade}</b>
      </li>
      <li className="text">
        Publisher <img className="icon" src={icon8} alt="calendar"></img>
        <b>{publisher}</b>
      </li>
    </ul>
  </div>
  )
}

export default DescriptionLine