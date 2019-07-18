/**
 * blockchain
 * Transaction.spec.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import ReactDOM from "react-dom";
import SummaryItem from "./SummaryItem";

it("SummaryItem renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<SummaryItem label={"test"} value={"test"}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
