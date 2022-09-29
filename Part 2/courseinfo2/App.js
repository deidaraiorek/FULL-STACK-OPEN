
const Total = ({totalEx}) => {
  return (
    <strong>total of {totalEx.reduce((accumulator,currentvalue) => {
      return accumulator + currentvalue.exercises
    },0) } exercises</strong>
  )
}
const Part = ({courseElement}) => {
  return (
    <div>
      <p>{courseElement.name} {courseElement.exercises} </p>
    </div>
  )
}
const Parts = ({coursePart}) => {
  return (
    <div>
      <h2>
      {coursePart.name}
      </h2>
      {coursePart.parts.map( (courseElement) => {
        return(
          <div>
          <Part key = {courseElement.id} courseElement ={courseElement}></Part>
          </div>
        )
      } )}
      <Total key = {coursePart.id} totalEx = {coursePart.parts}></Total>

    
    </div>
  )
}


const Course = ({courses}) => {
  return(
    <div>
      {courses.map(coursePart =>
      <Parts key = {coursePart.id} coursePart = {coursePart}></Parts>)}
  </div>

  )
 
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return(
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
}

export default App
