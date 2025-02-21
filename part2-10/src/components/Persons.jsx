const Persons = ({ persons, hiddenPersonIDs }) => {
	return (
		<ul>
			{persons
				.filter((person) => !hiddenPersonIDs.includes(person.id))
				.map((person) => (
					<li key={person.id}>{person.name} {person.number}</li>
				))}
		</ul>
	)
}

export default Persons
