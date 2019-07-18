/**
 * blockchain
 * NavigationBar.js
 * Created by Sıdıka ÇAY on 2019-07-10
 */

import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import {route} from "../../constants/app";

function NavigationBar(props) {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.onNavigate(route.GET_LATEST)}>
                        Latest Block
                    </Nav.Link>
                </Nav>
                {props.showBack ? null :
                    <Nav.Link className="" onClick={() => props.onNavigate(route.BACK)}>Back</Nav.Link>}
                {props.showNext ? null :
                    <Nav.Link className="" onClick={() => props.onNavigate(route.NEXT)}>Next</Nav.Link>}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
