import {LOCATIONS} from './apiRoutes';
import axios from 'axios';

const headers = {

    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

export const getLocations = async() => {
    try {
        const req = await axios.get(LOCATIONS, headers)
        return req;
    } catch(error) {
        console.error(error)
    }
}

export const postLocations = async(location) => {
    try {
        const req = await axios.post(LOCATIONS, location, headers)
        return req

    } catch(error) {
        console.error(error)
    }
}
