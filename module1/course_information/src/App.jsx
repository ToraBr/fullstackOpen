
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name}, {props.exercises} exercises
    </p>
  )
}
const Content = ({parts}) => {
  return (
    <div>
    {parts.map((part) => ( <Part name ={part.name} exercises ={part.exercises}/>))}
    </div>
  )
}

const Count = ({parts}) => {
  let sum = 0
  parts.forEach(part=> {sum += part.exercises})
  return (
    <div>
      
      <p> Number of excercises: {sum}
      </p>
    </div>
  )
}

  const App = () => {
  const course = 'Half Stack application development'
  const parts =[ {
    name: 'Fundamentals of React',
    exercises: 10
  },
   {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts} />
      <Count parts = {parts} />
    
    </div>
  )
}


export default App
