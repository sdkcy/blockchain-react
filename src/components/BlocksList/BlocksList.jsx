/**
 * blockchain
 * BlocksList.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import moment from "moment";
import {Table} from "react-bootstrap";
import {route} from "../../constants/app";

class BlocksList extends React.Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        return this.props.blocks.map((block, index) => {
            return (
                <tr onClick={() => this.props.onNavigate(route.GET_DETAIL, {hash: block.hash})} key={"Block_" + index}>
                    <td className="hash">{block.height}</td>
                    <td className="hash">{block.hash}</td>
                    <td>{moment.unix(block.time).format("HH:mm DD-MM-YYYY")}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Height</th>
                    <th>Hash</th>
                    <th>Mined Time</th>
                </tr>
                </thead>
                <tbody>
                {this.renderList()}
                </tbody>
            </Table>
        );
    }
}

export default BlocksList;
