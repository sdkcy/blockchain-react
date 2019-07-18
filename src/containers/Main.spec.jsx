/**
 * blockchain
 * Main.spec.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import store from "../store";
import {Provider} from "react-redux";

it("Main renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}><Main/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
