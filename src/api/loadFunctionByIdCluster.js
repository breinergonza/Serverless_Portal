import axios from "axios"


export const loadFunctionByIdCluster = async(clusterId) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/Function/${clusterId}`)
        .then(response => response.data)
        .catch(error => error)
}
