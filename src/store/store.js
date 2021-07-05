import {configureStore} from '@reduxjs/toolkit';
import reducer from "./reducers" 
import logger from "../middleware/logger"

export default function() {
    return configureStore({reducer, middleware:[logger({discription:"log from middleWare"})]});
  }
  