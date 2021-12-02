import axios from "axios"


export const loadFunctionsByOpenFaasId = async(id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/Function/${id}`)
        .then(response => response.data)
        .catch(error => error)
}
