import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-18e9d.firebaseio.com/'
})

export default instance