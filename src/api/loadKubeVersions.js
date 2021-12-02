import axios from "axios"


export const loadKubeVersions = async () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/KubeVersions`)
        .then(response => response.data)
        .catch(error => error)
/*     const response = await axios.get(`${process.env.REACT_APP_API_URL}/Kube/KubeVersions`) 
    return response.data */
}