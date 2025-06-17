
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p>
        {props.content1}<br/>
        {props.content2}<br/>
        {props.content3}
      </p>
    </div>
  )
}

const Count = (props) => {
  return (
    <div>
      <p> Numner of excercises: {props.amount1+props.amount2+props.amount3}
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
      <Content content1 = {part1} content2 = {part2} content3 = {part3}/>
      <Count amount1 = {exercises1} amount2={exercises2} amount3={exercises3}/>
    </div>
  )
}

export default App
