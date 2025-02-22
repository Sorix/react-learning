function handleSubmit({event, persons, onAddPerson, setDuplicateNotification}) {
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
		number: event.target.phone.value
	}

	onAddPerson(newPerson)
}

function PersonForm({persons, onAddPerson, setDuplicateNotification}) {
	return (
		<form onSubmit={(event) => handleSubmit({event, persons, onAddPerson, setDuplicateNotification})}>
			<div>
				<h4>Add person</h4>
				<input name="name" placeholder="name" />
				<input name="phone" placeholder="phone" />
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm