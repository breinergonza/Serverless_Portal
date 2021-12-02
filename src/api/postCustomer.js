import axios from "axios"

export const postCustomer = (dataJson) => {
  //return axios.post(`${process.env.REACT_APP_API_URL}/Kube/customer`, dataJson).then(resp => resp.data).catch(error => error)
  return axios.post(`https://kapitest.api.ifxcorp.com/api/customer`, dataJson)
    .then(resp => resp.data)
    .catch(error => error)
}