/**
 * blockchain
 * BlocksList.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import moment from "moment";
import {Table} from "react-bootstrap";
import {BLOCK_PER_PAGE, route} from "../../constants/app";

class BlocksList extends React.Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        const indexPrefix = ((this.props.page - 1) * BLOCK_PER_PAGE);
        return this.props.blocks.map((block, index) => {
            return (
                <tr onClick={() => this.props.onNavigate(route.GET_DETAIL, {hash: block.hash})} key={"Block_" + index}>
                    <td>{indexPrefix + index}</td>
                    <td>{block.height}</td>
                    <td>{moment.unix(block.time).format("HH:mm DD-MM-YYYY")}</td>
                    <td>{block.hash}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Height</th>
                    <th>Time</th>
                    <th>Hash</th>
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
