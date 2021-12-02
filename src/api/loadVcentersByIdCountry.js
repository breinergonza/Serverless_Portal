import axios from "axios"


export const loadVcentersByIdCountry = async (idCountry) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/Kube/Vcenters/${idCountry}`)
        .then(response => response.data)
/*     const response = await axios.get(`${process.env.REACT_APP_API_URL}/Kube/Vcenters/${idCountry}`) 
    return response.data */
}