import { useState } from 'react'
import './chat.scss'

const Chat = ({ showChat, setShowChat }) => {
  const [values, setValues] = useState({ name: '', email: '', support: '' })

  const saveFormData = async () => {
    const response = await fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify(values),
    })
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`)
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      await saveFormData()
      alert('Your message has been send!')
      setValues({
        name: '',
        email: '',
        support: '',
      })
    } catch (e) {
      alert(`Sending message failed! ${e.message}`)
    }
  }

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }))
    }
  }

  return showChat ? (
    <div className="chat-container">
      <button className="chat" onClick={() => setShowChat((prevState) => !prevState)}>
        Open Chat
      </button>
    </div>
  ) : (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Leave us a message</h2>
        <button onClick={() => setShowChat((prevState) => !prevState)} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <label>Name*:</label>
      <input value={values.name} onChange={set('name')} type="text" required />

      <label>E-mail*:</label>
      <input value={values.email} onChange={set('email')} type="text" required />

      <label>How can we help You?</label>
      <textarea value={values.support} onChange={set('support')} />

      <button type="submit">Send</button>
    </form>
  )
}

export default Chat
