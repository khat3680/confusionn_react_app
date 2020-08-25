import React, { Componenet, Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';



class Header extends Component {
    render() {
        return (
            // React fragment, helps to group together bunch of elements to return them.
            //alternative to use a div , if usea div it will add a new node in the virtual DOM. 
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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