import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import network from './services/networkService'
import LoginForm from './components/LoginForm'
import Welcome from './components/Welcome'
import networkService from './services/networkService'
import Notification from './components/Notification'

const App = () => {
	const [persons, setPersons] = useState([])
	const [hiddenPersonIDs, setHiddenPersonIDs] = useState([])
	const [isLogined, setIsLogined] = useState(false)
	const [loginNotification, setLoginNotification] = useState(null)

	useEffect(() => {
		network
			.get()
			.then(response => setPersons(response.data))
	}, [])

	useEffect(() => {
		if (localStorage.getItem("credentials")) {
			setIsLogined(true)
		} else {
			setIsLogined(false)
		}
	}, [])

	const handleAddPerson = (newPerson) => {
		const isDuplicate = persons.find(person => person.name === newPerson.name)

		if (isDuplicate) {
			console.log("Updated person to ", newPerson)
			
			network
				.update(newPerson)
				.then(response => setPersons(
					persons.map(person => person.id === newPerson.id ? response.data : person)
				))
		} else {
			network
				.add(newPerson)
				.then(response => setPersons(persons.concat(response.data)))
		}
	}
	
	const handleRemovePersonClick = (personID) => {
		network
			.remove(personID)
			.then(setPersons(persons.filter(person =>
				person.id !== personID
			)))
			.catch(error => alert(error))
	}

	// Login
	const handleLogin = (login) => {
		if (login !== "test") {
			setLoginNotification({
				color: "red",
				text: "Неверный логин"
			})

			setTimeout(() => setLoginNotification(null), 2_000)

			return
		}

		networkService
			.auth()
			.then(response => {
				localStorage.setItem("credentials", response.data)
				setIsLogined(true)
				setLoginNotification({
					color: "green",
					text: "Вы успешно вошли"
				})

				setTimeout(() => {
					setLoginNotification(null)
				}, 2_000)
			})
	}

	const handleLogout = () => {
		localStorage.removeItem("credentials")
		setIsLogined(false)
	}

	return (
		<div>
			<h2>Login</h2>
			{ loginNotification && <Notification notification={loginNotification} /> }
			{
				isLogined ? 
					<Welcome logout={handleLogout} /> :
					<LoginForm handleLogin={handleLogin} />
			}

			<h2>Phonebook</h2>
			<Filter persons={persons} setHiddenPersonIDs={setHiddenPersonIDs} />
			<PersonForm
				persons={persons}
				onAddPerson={handleAddPerson}
			/>

			<h2>Numbers</h2>
			<Persons 
				persons={persons} 
				hiddenPersonIDs={hiddenPersonIDs} 
				onClick={handleRemovePersonClick}
			/>
		</div>
	)
}

export default App