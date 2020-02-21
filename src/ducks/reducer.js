import axios from 'axios'

const initialSate = {
    user: {

        username: null,
        id: null,
        profile_pic: null
    }
}

const GET_USER = 'GET_USER'

export function getUser() {
    let userObj = axios.get(`/api/getUser`).then(res => res.data)
    return {
        type: GET_USER,
        payload: userObj
    }
}

export default function reducer(state = initialSate, action) {
    const { type, payload } = action

    switch (type) {
        case GET_USER:
            return { ...state, user: payload }
        default:
            return state
    }
}