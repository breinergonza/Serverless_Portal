import axios from "axios"

export const loadValidatedCustomer = async (netsuitId) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/Customer/${netsuitId}`)
        .then(response => response.data)
        .catch(error => error)
/*     const response = await axios.get(`${process.env.REACT_APP_API_URL}/Kube/Customer/${netsuitId}`)
    return response.data */
}
