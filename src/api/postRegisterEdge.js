import axios from "axios"


export const postRegisterEdge = (payload) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/Kube/CustomerCloud/RegistryCloud`, payload)
        .then(response => response.data)
        .catch(error => error)
}
