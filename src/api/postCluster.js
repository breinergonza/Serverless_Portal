import axios from "axios"


export const postCluster = (payload) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/Kube/Cluster`, payload)
        .then(response => response.data)
        .catch(error => error)
}
