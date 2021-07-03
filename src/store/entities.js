import { combineReducers } from "redux";
import bug from "./bug";
import project from "./project";
const entities=combineReducers({
    bugs:bug,
    projects:project
})


export default entities;