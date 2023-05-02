import axios from 'axios'

const instance = axios.create({
 baseURL: "https://dating-app-backend-elpr.onrender.com"
})

export default instance