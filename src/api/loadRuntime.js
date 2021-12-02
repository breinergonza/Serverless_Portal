import axios from "axios"

export const loadRuntime = async () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/RunTime`)
        .then(response => response.data)
        .catch(error => error)
/*     const response = await axios.get(`${process.env.REACT_APP_API_URL}/Kube/RunTime`)
    return response.data */
}
