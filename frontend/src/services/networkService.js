import networkService from 'axios'

const server = "http://localhost:3001"
const baseURL = `${server}/persons`

function get() { return networkService.get(baseURL) }
function add(person) { return networkService.post(baseURL, person) }
function remove(personID) { return networkService.delete(`${baseURL}/${personID}`) }
function update(person) { 
	return networkService.put(`${baseURL}/${person.id}?testItem=22`, person)
}

function auth() {
	return networkService.get(`${server}/auth`)
}

export default { get, add, remove, update, auth }