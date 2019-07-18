/**
 * blockchain
 * Transaction.spec.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import ReactDOM from "react-dom";
import Transaction from "./Transaction";

it("Transaction renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Transaction item={{inputs: [], out: []}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
