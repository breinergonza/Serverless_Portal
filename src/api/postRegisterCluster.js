import axios from "axios"


export const postRegisterCluster = (payload) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/Kube/Cluster/RegistryCluster`, payload)
        .then(response => response.data)
        .catch(error => error)
}
