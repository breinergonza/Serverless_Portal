import axios from "axios"

export const loadClustersByIdCustomer = (customerId) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/Kube/Cluster/${customerId}`)
    .then(response => response.data)
    .catch(error => error)

}