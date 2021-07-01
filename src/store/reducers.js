import { combineReducers } from "redux";
import bugsReducer from "./bug";
import projectReducer from "./project";


const reducer=combineReducers({
    bugs: bugsReducer,
    project: projectReducer
})
export default reducer