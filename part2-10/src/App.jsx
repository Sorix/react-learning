import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
	const [persons, setPersons] = useState([])
	const [duplicateNotification, setDuplicateNotification] = useState({
		isShown: false,
		name: null,
	})

	useEffect(() => {
		axios
			.get("http://localhost:3001/persons")
			.then(response => {
				console.log("Data received")
				setPersons(response.data)
			})
	}, [])

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