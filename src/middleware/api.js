import axios from "axios"
import * as bugActions from '../store/bug';

const api= ({dispatch}) => next => async action => {
    if(action.type != "apiCallStarted") return next(action);
    next(action);
    const {url,method,onSucess,onErr}= action.payload;
    try{
     const response= await  axios.request({
            url,
            method
        });
        if (onSucess) dispatch({ type: onSucess, payload: response.data });
    } catch(error){
        if (onErr) dispatch({ type: onErr, payload: error.message});
    }
}

export default api;