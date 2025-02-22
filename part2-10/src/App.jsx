import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Persons from './components/Persons'
import network from './services/persons'

const App = () => {
	const [persons, setPersons] = useState([])
	const [hiddenPersonIDs, setHiddenPersonIDs] = useState([])
	const [duplicateNotification, setDuplicateNotification] = useState({
		isShown: false,
		name: null,
	})

	useEffect(() => {
		network
			.get()
			.then(response => setPersons(response.data))
	}, [])

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter persons={persons} setHiddenPersonIDs={setHiddenPersonIDs} />
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				setDuplicateNotification={setDuplicateNotification}
			/>
			
			{duplicateNotification.isShown && (
				<Notification personName={duplicateNotification.name} />
			)}

			<h2>Numbers</h2>
			<Persons persons={persons} hiddenPersonIDs={hiddenPersonIDs} />
		</div>
	)
}

export default App