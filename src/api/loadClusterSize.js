import axios from "axios"

export const loadClusterSize = async () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/ClustersSize`)
        .then(response => response.data)
        .catch(error => error)
/*     const response = await axios.get(`${process.env.REACT_APP_API_URL}/Kube/ClustersSize`) 
    return response.data */
}