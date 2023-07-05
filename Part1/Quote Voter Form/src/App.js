















import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByGood = () => setGood(good + 1)
  const increaseByNeutral = () => setNeutral(neutral + 1)
  const increaseByBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Les Feedback Form</h1>
      <p>Good {good}</p>
      <button onClick={increaseByGood}>Good</button>
      <p>Neutral {neutral}</p>
      <button onClick={increaseByNeutral}>Neutral</button>
      <p>Bad {bad}</p>
      <button onClick={increaseByBad}>Bad </button>
      <Statistics good={good} bad={bad} neutral={neutral}/>

    </div>

  )
}

const Statistics = ({good, bad, neutral}) => {
  const total = () => good + bad + neutral 
  const positive = () => good / total()

  if (total() === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  } 
  
  return( 
      <table>
          <thead>
            <tr>
              <th>Positive</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>positive: {positive()} </td>
              <td>total: {total()}</td>
            </tr>
          </tbody>
        
      </table>
  )
}

export default App






















// import { useState } from 'react'


// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
  
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increaseByOne}>
//         plus
//       </button>
//       <button onClick={setToZero}>
//         zero
//       </button>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       {parts.map((value, index) => (
//         <p key={index}>{value.name}{value.exercises}</p>
//       ))}
//     </div>
//   )
// }
// export default App