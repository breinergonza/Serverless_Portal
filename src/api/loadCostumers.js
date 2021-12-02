import axios from "axios"

export const loadCustomers = async () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/Customer`)
        .then(response => response.data)
        .catch(error => error)
    
}