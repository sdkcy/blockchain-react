/**
 * blockchain
 * BlocksList.spec.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import ReactDOM from "react-dom";
import BlocksList from "./BlocksList";

it("BlocksList renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlocksList blocks={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
