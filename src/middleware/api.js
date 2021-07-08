import axios from "axios"
import * as bugActions from '../store/bug';

const api= ({dispatch}) => next => async action => {
    if(action.type != "apiCallStarted") return next(action);
    next(action);
    const {url,method,data,onSucess,onError}= action.payload;
    try{
     const response= await  axios.request({
            url,
            method,
            data
        });
        dispatch( bugActions[onSucess]({data:response.data}));
    } catch(error){
       dispatch( bugActions[onError]({payload:error}));
    }
}

export default api;