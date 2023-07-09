
const header = ({heading}) => { 
  <h1>{heading}</h1>
}


const content = ({part}) => { 
  <div>{parts.map}(part => part={part})</div>

}




const Course = ({course}) => {
  <div>
    <header heading={course.name}/>
    <content></content>
  </div>
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App

















// const CourseInfo = ({part}) => {
//   const exercisesMap = part.exercises.map(exercises => exercises)
//   const totalExercises = exercisesMap.reduce(reducer, 0);
//   return (
//     <div>
//         <li>{part.name}</li>
//         <li>ID Number:{part.id}</li>
//         <li>Amount:{part.exercises}</li>
//         <li>Total: {totalExercises}</li>
//     </div>
//   )
// }

// function reducer(accumulator, currentValue) {
//   return accumulator + currentValue;
// }

// const App = ({course}) => {

//   return(
//     <div>
//     <h1>Course Information</h1>
//     <ul>
//       {course.parts.map(part => 
//       <CourseInfo key={part.id} part = {part}/> 
       
    
//       )}
//     </ul>
//     </div>
//   )
// }

// export default App