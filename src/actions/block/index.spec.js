/**
 * blockchain
 * index.spec.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import {getBlocks, getBlockDetail} from "./index";
import {blockActionTypes,} from "../actionTypes";
import config from "../../config/config.json";
import {axiosBackend, Status} from "../../constants/axios";

const mockStore = configureMockStore([thunk]);

describe("Block action creator tests", () => {
    const API_URL = config.backend.baseURL;
    const mock = new MockAdapter(axiosBackend);
    const store = mockStore({list: [], detail: null});

    afterEach(() => {
        mock.reset();
        store.clearActions();
    });

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

    it("When the all latest blocks data is gotten, " +
        "It should dispatch GET_BLOCKS action with payload of the all blocks data", () => {
        mock.onGet(API_URL + "blocks/").reply(() => {
            return [Status.OK, {blocks}];
        });

        return store.dispatch(getBlocks()).then(() => {
            const dispatchedAction = store.getActions()[0];
            expect(dispatchedAction.type).toEqual(blockActionTypes.GET_BLOCKS);
            expect(dispatchedAction.payload).toEqual(blocks);
        });
    });

    it("When the selected block detail data is gotten, " +
        "It should dispatch GET_BLOCK_DETAIL action with payload of the block detail data", () => {

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
        mock.onGet(API_URL + "rawblock/" + blockDetail.hash).reply(() => {
            return [Status.OK, blockDetail];
        });

        return store.dispatch(getBlockDetail(blockDetail.hash)).then(() => {
            const dispatchedAction = store.getActions()[0];
            expect(dispatchedAction.type).toEqual(blockActionTypes.GET_BLOCK_DETAIL);
            expect(dispatchedAction.payload).toEqual(blockDetail);
        });
    });
});
