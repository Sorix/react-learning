const Hello = (props) => {
  return (
    <div><p>Hello world, {props.name}</p></div>
  )
}

const App = () => {
  console.log("Hello test")
  
  const now = Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <h1>Title</h1>
      <Hello name="Vasily" />
    </div>
  )
}

export default App