/**
 * blockchain
 * SummaryItem.jsx
 * Created by Sıdıka ÇAY on 2019-07-16
 */

import React from "react";
import "./style.css";

class SummaryItem extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.label !== nextProps.label || this.props.value !== nextProps.value;
    }

    render() {
        return (
            <div className={"container"}>{this.props.label}:
                <span className={"value text-muted"}>{this.props.value}</span>
            </div>
        );
    }
}

export default SummaryItem;
