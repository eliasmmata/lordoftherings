import axios from 'axios';
import { CHARACTERS, WEAPONS, ITEMS } from './apiRoutes';

const headers = {

    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

export const getCharacters = async() => {
    const request = await fetch(CHARACTERS, {
        method: 'GET',
        headers: headers
    })
    const response = await request.json()
    return response;
}

export const postCharacter = async (character) => {
    try {
        const req = await axios.post(CHARACTERS, character, headers)
        return req

    } catch(error) {
        console.error(error)
    }
}

export const deleteCharacter = async(id) => {
    try {
        const req = await axios.delete(CHARACTERS + `/${id}`, headers)
        return req

    } catch(error) {
        console.error(error)
    }
}



export const getWeapons= async() => {
    const request = await fetch(WEAPONS, {
        method: 'GET',
        headers: headers
    })
    const response = await request.json()
    return response;
}

export const postWeapon = async (weapon) => {
    try {
        const req = await axios.post(WEAPONS, weapon, headers)
        return req

    } catch(error) {
        console.error(error)
    }
}

export const getItems= async() => {
    const request = await fetch(ITEMS, {
        method: 'GET',
        headers: headers
    })
    const response = await request.json()
    return response;
}

export const postItem = async (item) => {
    try {
        const req = await axios.post(ITEMS, item, headers)
        return req

    } catch(error) {
        console.error(error)
    }
}
