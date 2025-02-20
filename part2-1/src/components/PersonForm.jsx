function handleSubmit({event, persons, setPersons, setDuplicateNotification}) {
	event.preventDefault()

	// Check if person was already added
	const newName = event.target.name.value
	const isDuplicate = persons.find(person => person.name === newName)
	setDuplicateNotification({
		isShown: isDuplicate,
		name: isDuplicate ? newName : null
	})

	if (isDuplicate) { return }

	const newPerson = {
		name: newName,
		id: persons.length + 1
	}

	setPersons(persons.concat(newPerson))
}

function PersonForm({persons, setPersons, setDuplicateNotification}) {
	return (
		<form onSubmit={(event) => handleSubmit({event, persons, setPersons, setDuplicateNotification})}>
			<div>
					Add person: <input name="name" /><button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm