/**
 * blockchain
 * index.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import {blockActionTypes} from "../../actions/actionTypes";

export const initialState = {
    list: [],
    detail: null
};

export default function blockReducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case blockActionTypes.GET_BLOCKS:
            newState = Object.assign({}, state, {list: action.payload});
            break;
        case blockActionTypes.GET_BLOCK_DETAIL:
            newState = Object.assign({}, state, {detail: action.payload});
            break;
        case blockActionTypes.RESET:
            newState = Object.assign({}, state, {detail: null});
            break;
        case blockActionTypes.ADD_BLOCK:
            if (newState.list[0].height < action.payload.height) {
                newState = Object.assign({}, state, {list: [action.payload].concat(newState.list)});
            }
            break;
        default :
            break;
    }

    return newState;
}
