import * as actionTypes from './actionTypes';
import axios from '../../Axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

//show/hide add contact form
export const showForm = (boolean) => {
    return {
        type: actionTypes.SHOW_FORM,
        showForm: boolean
    }
}

//loading a list of contacts from rest api
export const fetchContactStart = () => {
    return {
        type: actionTypes.FETCH_CONTACTS_START
    }
}

export const fetchContactFail = (err) => {
    return {
        type: actionTypes.FETCH_CONTACTS_FAIL,
        error: err
    }
}

export const fetchContactSuccess = (data) => {
    return {
        type: actionTypes.FETCH_CONTACTS_SUCCESS,
        contacts: data
    }
}

export const fetchContacts = () => {
    return dispatch => {
        dispatch(fetchContactStart());
        dispatch(showLoading());
        axios.get('/users')
            .then(response => {
                dispatch(fetchContactSuccess(response.data));
                dispatch(hideLoading());
            })
            .catch(error => {
                dispatch(fetchContactFail(error));
                dispatch(hideLoading());
            });
    }
}