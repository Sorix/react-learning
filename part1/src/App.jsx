function Header({ course }) {
  return (
    <h1>{ course }</h1>
  )
}

function Part({part, numberOfExercises}) {
  return (
    <p>{part} {numberOfExercises}</p>
  )
}

function Content({parts}) {
  return (
    <div>
      <Part part={parts[0].part} numberOfExercises={parts[0].numberOfExercises} />
      <Part part={parts[1].part} numberOfExercises={parts[1].numberOfExercises} />
      <Part part={parts[2].part} numberOfExercises={parts[2].numberOfExercises} />
    </div>
  )
}

function Total({total}) {
  return (
    <p>Number of exercises {total}</p>
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
      <Header course={ course }/>
      <Content parts={ 
        [
          { 
            "part": part1,
            "numberOfExercises": exercises1
          },
          { 
            "part": part2,
            "numberOfExercises": exercises2
          },
          { 
            "part": part3,
            "numberOfExercises": exercises3
          }
        ] 
      } />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App