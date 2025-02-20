function Filter({persons, setPersons}) {
	function handleChange(event) {
		const value = event.target.value;

		const filteredPersons = persons.map(person => (
			{
				...person,
				isShown: person.name.toLowerCase().includes(value.toLowerCase())
			}
		))
		
		setPersons(filteredPersons)
	}

	return (
		<div>Filter: <input onChange={handleChange} /></div>
	)
}

export default Filter