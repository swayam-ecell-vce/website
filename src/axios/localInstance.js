import Axios from 'axios'
const instance = Axios.create({
    //baseURL: 'http://localhost:5000/'
    baseURL: 'https://fierce-wave-66070.herokuapp.com/'
})
export default instance