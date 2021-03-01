import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    contacts: [],
    loading: false,
    error: null,
    showForm: false,
}

// const contactListInit = (state, action) => {
//     return updateObject(state, { contacts: [] });
// }

const fetchContactStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const fetchContactFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
}

const fetchContactSuccess = (state, action) => {
    return updateObject(state, {
        contacts: action.contacts,
        loading: false
    });
}

const showForm = (state, action) => {
    return updateObject(state, {
        showForm: action.showForm,
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CONTACTS_START: return fetchContactStart(state, action);
        case actionTypes.FETCH_CONTACTS_SUCCESS: return fetchContactSuccess(state, action);
        case actionTypes.FETCH_CONTACTS_FAIL: return fetchContactFail(state, action);
        case actionTypes.SHOW_FORM: return showForm(state, action);
        default: return state;
    }
}

export default reducer;