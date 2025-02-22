import networkService from 'axios'

const baseURL = "http://localhost:3001/persons"

function get() { return networkService.get(baseURL) }
function save(person) { networkService.post(baseURL, person) }

export default { get, save }