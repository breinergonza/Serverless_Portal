import axios from "axios"

export const putFunction = async(payload) => {
  return axios.put(`${process.env.REACT_APP_API_URL}/Kube/Function/UpdateFunction`, payload)
    .then(resp => resp.data)
    .catch(error => error)
}
