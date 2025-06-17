
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
const Content = (props) => {
  return (
    <div>
     
        <Part name = {props.name1} exercises = {props.exercises1}/>
        <Part name = {props.name2} exercises = {props.exercises2}/>
        <Part name = {props.name3} exercises = {props.exercises3}/>
      
    </div>
  )
}

const Count = (props) => {
  return (
    <div>
      <p> Number of excercises: {props.amount1+props.amount2+props.amount3}
      </p>
    </div>
  )
}

  const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content name1 = {part1.name} exercises1={part1.exercises} name2 = {part2.name} exercises2={part2.exercises} name3 = {part3.name} exercises3={part3.exercises}/>
      <Count amount1 = {part1.exercises} amount2={part2.exercises} amount3={part3.exercises}/>
    
    </div>
  )
}


export default App
