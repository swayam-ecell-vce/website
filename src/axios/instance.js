import Axios from 'axios'

const instance = Axios.create({
	baseURL: 'https://swayam-website-default-rtdb.firebaseio.com/'
})

export default instance