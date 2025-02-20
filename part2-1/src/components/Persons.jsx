const Persons = ({ persons }) => {
	return (
		<ul>
			{persons
				.filter((person) => person.isShown)
				.map((person) => (
					<li key={person.id}>{person.name}</li>
				))}
		</ul>
	)
}

export default Persons
