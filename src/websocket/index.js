/**
 * blockchain
 * index.js
 * Created by Sıdıka ÇAY on 2019-07-18
 */

export const bcSocket = WebSocket ? new WebSocket("wss://ws.blockchain.info/inv") : null;

bcSocket.onopen = function(){
    bcSocket.send(JSON.stringify({"op":"blocks_sub"}));
};

bcSocket.onclose = function () {
    bcSocket.send(JSON.stringify({"op": "blocks_unsub"}));
};
