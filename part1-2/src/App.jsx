import './App.css'

import { useState } from 'react'

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

const Statistics = () => {

}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleButtonClick = (feedbackType) => () => {
    const newFeedback = {
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    }

    console.log("New feedback", newFeedback)

    setFeedback(newFeedback)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleButtonClick("good")}>Good</Button>
      <Button onClick={handleButtonClick("neutral")}>Neutral</Button>
      <Button onClick={handleButtonClick("bad")}>Bad</Button>
    </div>
  )
}

export default App