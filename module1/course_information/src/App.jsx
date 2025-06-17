
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content name1 = {part1} exercises1={exercises1} name2 = {part2} exercises2={exercises2} name3 = {part3} exercises3={exercises3}/>
      <Count amount1 = {exercises1} amount2={exercises2} amount3={exercises3}/>
    </div>
  )
}

export default App
