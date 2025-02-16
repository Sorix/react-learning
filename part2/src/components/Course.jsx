import Content from './Content'

const Course = ({name, parts}) => {
    return(
    <>
        <h1>{name}</h1>
        <Content parts={parts} />
    </>
)
}

export default Course