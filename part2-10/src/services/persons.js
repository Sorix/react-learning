import networkService from 'axios'

const baseURL = "http://localhost:3001/persons"

function get() { return networkService.get(baseURL) }
function add(person) { return networkService.post(baseURL, person) }
function remove(personID) { return networkService.delete(`${baseURL}/${personID}`) }

export default { get, add, remove }