import axios from 'axios'

export const loadOpenfaasByIdCluster = (clusterId) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/Kube/OpenFaasCluster/${clusterId}`)
              .then(response => response.data)
              .catch(error => error)
}
