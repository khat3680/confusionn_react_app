import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

class DishDetail extends Component {

    componentDidMount() {
        console.log('DishDetail Component componentDidMount invoked');
    }

    componentDidUpdate() {
        console.log('DishDetail Component componentDidUpdate invoked');
    }

    RenderDish(dish) {

        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    RenderComments(comments) {
        if (comments != null) {
            let comms = comments.map((comm, i) => {
                let date = new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comm.date)))

                return (
                    <ul key={comm.id} className="list-unstyled">
                        <li className="comment">{comm.comment}</li>
                        <li className="author">-- {comm.author}, {date}</li>
                    </ul>
                );
            })


            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div>{comms}</div>
                </div>

            );
        }
        else {
            return (
                <div></div>
            )
        }
    }


    render() {

        console.log('Dishdetail Component render invoked');

        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active >{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                        <div className="row">
                            {this.RenderDish(this.props.dish)}
                            {this.RenderComments(this.props.comments)}
                        </div>
                    </div>
                </div>

                    );

        } else {
            return (
                <div></div>
                    );
                }
        
                
            }
        }
export default DishDetail;