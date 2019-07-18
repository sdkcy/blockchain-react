/**
 * blockchain
 * Transaction.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import {ListGroup} from "react-bootstrap";
import "./style.css";

class Transaction extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.item.hash !== nextProps.item.hash;
    }

    render() {
        const {item} = this.props;
        return (
            <ListGroup.Item className="transaction-container mb-2">
                <div className="hash">{item.hash}</div>
                <div className="mb-3 transactions">Inputs:{item.inputs.map((subItem, subIndex) => {
                    return (<div key={"inputs_" + subIndex + "_" + subItem.script}
                                 className="text-muted">{subItem.prev ? subItem.prev.addr : "No Input"}</div>);
                })}</div>
                <div className="transactions">Outs:{item.out.map((subItem, subIndex) => {
                    return (<div key={"out_" + subIndex + "_" + subItem.script}
                                 className="text-muted">{subItem.addr}</div>);
                })}
                </div>
            </ListGroup.Item>
        );
    }
}

export default Transaction;
