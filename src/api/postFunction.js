import axios from "axios"

export const postFunction = async(payload) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/Kube/Function`, payload)
    .then(resp => resp.data)
    .catch(error => error)
}
