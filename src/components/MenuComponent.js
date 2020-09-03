import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//console.log("hool");

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <Link to= { `/menu/${dish.id}`}> 
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card >
    );
}

// <Link to= { `/menu/${dish.id}`}> 
// active link, chnages dynamically





// console.log('Menu Component render invoked');
// Another way of implementing fuctional  component
const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id} >
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active >Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
                {menu}
            </div>
        </div>
    );

}

export default Menu; 
