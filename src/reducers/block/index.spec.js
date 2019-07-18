/**
 * blockchain
 * index.spec.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import {blockActionTypes} from "../../actions/actionTypes";
import blockReducer, {initialState} from "./index";

describe("Block reducer test", () => {

    const blocks = [
        {
            "height": 584789,
            "hash": "0000000000000000000c4a4d22b337e718eb411b08424c62963c286a6a274c81",
            "time": 1562765283,
            "main_chain": true
        },
        {
            "height": 584788,
            "hash": "00000000000000000011686bc771e8c19b7523a3703999e654d163678d43e531",
            "time": 1562765127,
            "main_chain": true
        }
    ];

    it("When get blocks action is sent to reducer, " +
        "It should set blocks data to the state", () => {
        const testAction = {
            type: blockActionTypes.GET_BLOCKS,
            payload: blocks
        };
        const expected = blockReducer(initialState, testAction);
        const real = {
            ...initialState,
            list: blocks
        };
        expect(expected).toEqual(real);
    });

    it("When get block detail action is sent to reducer, " +
        "It should set block detail data to the state", () => {
        const blockDetail = {
            "hash": "0000000000000000001cf80ca740b522b05de5c1bfc690332594c24a7c5387d7",
            "ver": 549453824,
            "prev_block": "0000000000000000001bc16819d20749c733c356390d227b53474dc1d3d38a1e",
            "next_block": [
                "00000000000000000011686bc771e8c19b7523a3703999e654d163678d43e531"
            ],
            "mrkl_root": "58eb7ce0f03bd50b4a5a290292c856e3897bda5e8352c0956c2ef7d8de181a47",
            "time": 1562765077,
            "bits": 387911067,
            "fee": 96986493,
            "nonce": 1418470836,
            "n_tx": 2740,
            "size": 1284200,
            "block_index": 1772879,
            "main_chain": true,
            "height": 584787,
            "tx": []
        };

        const testAction = {
            type: blockActionTypes.GET_BLOCK_DETAIL,
            payload: blockDetail
        };
        const expected = blockReducer(initialState, testAction);
        const real = {
            ...initialState,
            detail: blockDetail
        };
        expect(expected).toEqual(real);
    });
});
