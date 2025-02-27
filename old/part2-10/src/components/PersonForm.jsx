function handleSubmit({event, persons, onAddPerson}) {
	event.preventDefault()

	const newName = event.target.name.value
	const newPerson = {
		name: newName,
		number: event.target.phone.value
	}
	const existingPerson = persons.find(person => person.name === newName)
	
	if (existingPerson) {
		handleDuplicate({
			...newPerson,
			id: existingPerson.id,
		}, onAddPerson)
	} else {
		onAddPerson(newPerson)
	}
}

function handleDuplicate(newPerson, onAddPerson) {
	const isConfirmed = confirm(`${newPerson.name} is already exists. Replace phone number with the new one?`)

	if (isConfirmed) {
		onAddPerson(newPerson)
	}
}

function PersonForm({persons, onAddPerson}) {
	return (
		<form onSubmit={(event) => handleSubmit({event, persons, onAddPerson})}>
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