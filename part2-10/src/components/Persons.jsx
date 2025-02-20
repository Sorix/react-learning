const Persons = ({ persons }) => {
	return (
		<ul>
			{persons
				.filter((person) => person.isShown)
				.map((person) => (
					<li key={person.id}>{person.name} {person.number}</li>
				))}
		</ul>
	)
}

export default Persons
