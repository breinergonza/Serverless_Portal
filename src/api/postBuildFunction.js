import axios from "axios"

export const postBuildFunction = async(payload) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/Kube/Function/BuildFunction`, payload)
    .then(resp => resp.data)
    .catch(error => error)
}
