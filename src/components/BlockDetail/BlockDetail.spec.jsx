/**
 * blockchain
 * BlockDetail.spec.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import ReactDOM from "react-dom";
import BlockDetail from "./BlockDetail";

it("BlockDetail renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlockDetail/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
