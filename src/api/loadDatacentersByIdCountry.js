import axios from "axios"

export const loadDatacentersByIdCountry = async (countryId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/Kube/Datacenters/${countryId}`)
        return response.data
    } catch (error) {
        return error
    }
}
