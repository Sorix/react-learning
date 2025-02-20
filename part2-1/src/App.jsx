import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1, isShown: true },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2, isShown: true },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3, isShown: true },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4, isShown: true }
	])
	const [duplicateNotification, setDuplicateNotification] = useState({
		isShown: false,
		name: null,
	})

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter persons={persons} setPersons={setPersons} />
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				setDuplicateNotification={setDuplicateNotification}
			/>
			
			{duplicateNotification.isShown && (
				<Notification personName={duplicateNotification.name} />
			)}

			<h2>Numbers</h2>
			<Persons persons={persons} />
		</div>
	)
}

export default App