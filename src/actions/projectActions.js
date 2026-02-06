import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL
} from '../constants/projectConstants.js';
import axios from 'axios';

export const listProjects = () => async (dispatch) => {
    try {
        dispatch({ type: PROJECT_LIST_REQUEST })
        const { data } = await axios.get('http://127.0.0.1:8000/api/v1/projects/')
        dispatch({
            type: PROJECT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROJECT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}