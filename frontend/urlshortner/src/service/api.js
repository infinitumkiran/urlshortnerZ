import axios from 'axios';

const url='http://localhost:4000/';

export const addurl = async (urli) => {

    return await axios.post(`${url}`, urli);
}

export const showhash = async (urli) => {
    console.log(urli);
    return await axios.get(`${url}/${urli}`,);
}
