const Persons = ({ persons, hiddenPersonIDs, onClick }) => {
	return (
		<ul>
			{persons
				.filter((person) => !hiddenPersonIDs.includes(person.id))
				.map((person) => (
					<li key={person.id}>
						{person.name} {person.number} 
						<button onClick={() => onClick(person.id)}>🗑️</button>
					</li>
				))
			}
		</ul>
	)
}

export default Persons
