import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {

        super(props);
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }
    // toggleNav , is a method so we need to bind it in the class compnent, so that we can use it in the render func.
    //to change its current state, mean to negate its state of open or not. and its a method .
    toggleNav() {
        this.setState({
            isNavopen: !this.state.isNavOpen
        });
    }
    
    render() {
        return (
            // React fragment, helps to group together bunch of elements to return them.
            //alternative to use a div , if usea div it will add a new node in the virtual DOM. '
            //this empty block below is REact fragment
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick ={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem >
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                                </NavItem >

                                <NavItem >
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                                </NavItem >

                                <NavItem >
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                                </NavItem >

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmaking creatins will tickle your culinary senses.</p>
                            </div>
                        </div>
                    </div>

                </Jumbotron>
            </>
        );
    }
}

export default Header;