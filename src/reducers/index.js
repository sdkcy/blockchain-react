/**
 * blockchain
 * index.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import {combineReducers} from "redux";
import blockReducer from "./block";

export const rootReducer = combineReducers({
    block: blockReducer
});
 
