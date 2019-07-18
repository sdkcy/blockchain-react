/**
 * blockchain
 * Main.jsx
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getBlockDetail, getBlocks, resetDetail} from "../actions/block";
import {BLOCK_PER_PAGE, route} from "../constants/app";
import BlocksList from "../components/BlocksList/BlocksList";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import BlockDetail from "../components/BlockDetail/BlockDetail";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: route.GET_LATEST,
            blockDetailModalShow: false,
            page: 1
        };
        this.onNavigationChange = this.onNavigationChange.bind(this);
    }

    componentDidMount() {
        this.props.getBlocks();
    }

    onNavigationChange(routeName, params) {
        let newState = Object.assign({}, this.state);
        newState.route = routeName;

        switch (routeName) {
            case  route.NEXT:
                if (this.props.blocks.length > this.state.page * BLOCK_PER_PAGE) {
                    newState.page = this.state.page + 1;
                }
                break;
            case  route.BACK:
                if (this.state.page > 1) {
                    newState.page = this.state.page - 1;
                }
                break;
            case  route.GET_LATEST:
                newState.page = this.state.page + 1;
                this.props.getBlocks();
                break;
            case  route.GET_DETAIL:
                this.props.getBlockDetail(params.hash);
                newState.blockDetailModalShow = true;
                break;
            default:
                break;
        }

        this.setState(newState);
    }

    onBlockDetailClose() {
        this.setState({blockDetailModalShow: false});
        this.props.resetDetail();
    }

    render() {
        const allBlocks = this.props.blocks || [];
        const start = (this.state.page - 1) * BLOCK_PER_PAGE;
        const blocks = allBlocks.slice(start, start + BLOCK_PER_PAGE);
        return (
            <div>
                <NavigationBar onNavigate={this.onNavigationChange}
                               showNext={this.props.blocks.length <= this.state.page * BLOCK_PER_PAGE}
                               showBack={this.state.page < 2}/>
                <BlocksList blocks={blocks} page={this.state.page} onNavigate={this.onNavigationChange}/>
                <BlockDetail data={this.props.detail} show={this.state.blockDetailModalShow}
                             onHide={() => this.onBlockDetailClose()}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        blocks: state.block.list,
        detail: state.block.detail,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBlocks: bindActionCreators(getBlocks, dispatch),
        getBlockDetail: bindActionCreators(getBlockDetail, dispatch),
        resetDetail: bindActionCreators(resetDetail, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
