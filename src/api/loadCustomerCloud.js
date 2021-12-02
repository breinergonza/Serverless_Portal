import axios from "axios"

export const loadCustomerCloud = async (customerId, countryId) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/CustomerCloud/${customerId}/${countryId}`)
        .then(response => {
            return response.data
        })
        .catch(error => error)
}
