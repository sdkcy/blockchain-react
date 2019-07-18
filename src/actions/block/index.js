/**
 * blockchain
 * index.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import {axiosBackend} from "../../constants/axios";
import {blockActionTypes} from "../actionTypes";

export function getBlocks() {
    return ((dispatch) => {
        return axiosBackend.get("blocks/", {params: {format: "json"}})
            .then((response) => {
                return dispatch({
                    type: blockActionTypes.GET_BLOCKS,
                    payload: response.data.blocks
                });
            })
            .catch((error) => {
                console.log("Error", error);
            });
    });
}

export function getBlockDetail(hash) {
    return ((dispatch) => {
        return axiosBackend.get("rawblock/" + hash)
            .then((response) => {
                return dispatch({
                    type: blockActionTypes.GET_BLOCK_DETAIL,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log("Error", error);
            });
    });
}

export function addNewBlock(newBlock) {
    const block = {
        height: newBlock.height,
        hash: newBlock.hash,
        time: newBlock.time
    };

    return {
        type: blockActionTypes.ADD_BLOCK,
        payload: block
    };
}

export function resetDetail() {
    return {
        type: blockActionTypes.RESET
    };
}

