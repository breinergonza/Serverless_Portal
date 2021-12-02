import axios from "axios"


export const loadOsByIdVersion = (idVersion) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/KubeVersions/${idVersion}`)
        .then(response => response.data)
        .catch(error => error)
}