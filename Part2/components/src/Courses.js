const Part = ({part}) => (
    <p>
      {part.name} {part.exercises}
    </p>
  )
  
  
  const Header = ({heading}) => (
    <h1>{heading}</h1>
  )
  
  
  const Content = ({parts}) => (
    <div>
    {parts.map(part => 
      <Part key={part.id} part={part} />)}
    </div>
  )
  
  const Total = ({parts}) => ( 
    <p>
      Total of {parts.reduce((a,b) => a+b.exercises,0)} exercises 
    </p>
  )

const Courses = ({courses}) => (
    <div>
      {courses.map(course => (
        <p>
          <Header heading = {course.name}/> 
          <Content parts = {course.parts}/> 
          <Total parts = {course.parts}/> 
        </p>
      ))}
    </div>
  )

export default Courses