import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', id: 1 }
	])
	const [duplicateNotification, setDuplicateNotification] = useState({
		isShown: false,
		name: null,
	})

	return (
		<div>
			<h2>Phonebook</h2>
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				setDuplicateNotification={setDuplicateNotification}
			/>
      
			{duplicateNotification.isShown && (
				<Notification personName={duplicateNotification.name} />
			)}

			<h2>Numbers</h2>
			<ul>
				{persons.map((person) => (
					<li key={person.id}>{person.name}</li>
				))}
			</ul>
		</div>
	)
}

export default App