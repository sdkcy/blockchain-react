/**
 * blockchain
 * logger.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */


const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info("dispatching", action);
    const result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();

    return result;
};

export default logger;
 
