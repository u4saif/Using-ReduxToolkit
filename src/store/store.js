import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import logger from "../middleware/logger";
import api from "../middleware/api";
export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ discription: "log from middleWare" }),
      api
    ],
  });
}
