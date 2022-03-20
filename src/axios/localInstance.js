import Axios from 'axios'
const instance = Axios.create({
    baseURL: 'https://fierce-wave-66070.herokuapp.com/'
})
export default instance