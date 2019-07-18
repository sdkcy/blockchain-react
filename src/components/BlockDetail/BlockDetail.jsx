/**
 * blockchain
 * BlockDetail.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import {Card, ListGroup, Modal, Nav} from "react-bootstrap";
import Transaction from "../Transaction/Transaction";
import {TRANSACTION_PER_PAGE} from "../../constants/app";
import SummaryItem from "../SummaryItem/SummaryItem";
import "./style.css";

class BlockDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBTC: 0,
            page: 1
        };
        this.renderData = this.renderData.bind(this);
        this.calculateTotalBTC = this.calculateTotalBTC.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.data && this.state.totalBTC === 0) {
            this.calculateTotalBTC(nextProps.data.tx);
        }
        return true;
    }

    calculateTotalBTC(transactions) {
        let total = 0;
        transactions.map((transaction) => transaction.out.map((item) => total += item.value));
        this.setState({totalBTC: total});
    }

    renderData(transactions) {
        const currentIndex = (this.state.page - 1) * TRANSACTION_PER_PAGE;
        const visibleTransactions = transactions.slice(0, currentIndex + TRANSACTION_PER_PAGE);
        return visibleTransactions.map((item) => <Transaction key={item.hash} item={item}/>);
    }

    loadMore() {
        if (this.props.data.tx.length > this.state.page * TRANSACTION_PER_PAGE) {
            this.setState({page: this.state.page + 1});
        }
    }

    render() {
        if (!this.props.data) {
            return <React.Fragment/>;
        }
        const {size, block_index, prev_block, tx} = this.props.data;
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <SummaryItem label={"Size"} value={size}/>
                            <SummaryItem label={"Total BTC"} value={this.state.totalBTC}/>
                            <SummaryItem label={"Block Index"} value={block_index}/>
                            <SummaryItem label={"Previous Hash"} value={prev_block}/>
                            <SummaryItem label={"Transactions nums"} value={tx.length}/>
                            <br/>
                            <ListGroup className="list-group-flush">
                                {this.renderData(tx)}
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            {this.props.data.tx.length > this.state.page * TRANSACTION_PER_PAGE ?
                                <Nav.Link className="footer mx-auto text-center"
                                          onClick={this.loadMore}>Load More</Nav.Link> : null}
                        </Card.Footer>
                    </Card>
                </Modal.Body>
            </Modal>
        );
    }
}

export default BlockDetail;
