/**
 * blockchain
 * index.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {hot} from "react-hot-loader";
import {Provider} from "react-redux";
import store from "./store";
import Main from "./containers/Main";

let App = () => {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
};

App = hot(module)(App);

ReactDOM.render(<App/>, document.getElementById("root"));

serviceWorker.unregister();
