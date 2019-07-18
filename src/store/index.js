/**
 * blockchain
 * index.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "../middlewares/logger";
import {rootReducer} from "../reducers";

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
