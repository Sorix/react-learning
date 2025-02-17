import Content from './Content'
import Total from './Total'

const Course = ({name, parts}) => {
    const totalExercises = parts.reduce(
        (accumulator, part) => accumulator + part.exercises, 0
    )
    return(
    <>
        <h1>{name}</h1>
        <Content parts={parts} />
        <Total exercises={totalExercises} />
    </>
)
}

export default Course