import axios from "axios"

export const loadCCloudByCustomerIdDatacenterId = async (datacenterId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/Kube/CustomerCloud/1/${datacenterId}`)
        return response.data
    } catch (error) {
        return error
    }
}
