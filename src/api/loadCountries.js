import axios from "axios"

export const loadCountries = async () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/Country`)
        .then(response => response.data)
        .catch(error => error)
/*     const response = await axios.get(`${process.env.REACT_APP_API_URL}/Kube/Country`) 
    return response.data */
}