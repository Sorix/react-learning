function Filter({persons, setHiddenPersonIDs}) {
	function includes(value1, value2) {
		return value1.toLowerCase().includes(value2.toLowerCase())
	}

	function handleChange(event) {
		const value = event.target.value;
		const hiddenPersonIDs = persons
			.filter(person => !includes(person.name, value))
			.map(person => person.id)

		setHiddenPersonIDs(hiddenPersonIDs)
	}

	return (
		<div>Filter: <input onChange={handleChange} /></div>
	)
}

export default Filter