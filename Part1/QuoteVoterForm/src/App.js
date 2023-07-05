import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ] 
  


   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const numberGenerator = () => {
      setSelected(Math.floor(Math.random()*anecdotes.length))
     
    }
  
  const voteTracker = () => {
      const copy = [...votes]
      copy[selected]++
      setVotes(copy)
    }

  return (
    <div>
      {anecdotes[selected]}
       Has {votes[selected]}
      <button onClick={numberGenerator}>Random</button>
      <button onClick={voteTracker}>Vote</button>
    </div>
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