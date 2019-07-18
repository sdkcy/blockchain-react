/**
 * blockchain
 * index.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import Axios from "axios";
import {backend} from "../../config/config.json";

export const axiosBackend = Axios.create({
    baseURL: backend.baseURL,
    timeout: 5000,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    params:{
        cors: true
    }
});

export const Status = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    NOT_MODIFIED: 304,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
};
