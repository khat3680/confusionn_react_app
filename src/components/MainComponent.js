import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from "/Users/anshul/Documents/Coursera/React/confusionn/src/components/DishdetailComponent.js";
import { DISHES } from '../shared/dishes';

//alert('Do you really want to see it ?');

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishselect(dishId) {
    this.setState({ selectedDish: dishId})
  }


render() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishselect(dishId)} />
      <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    </div>
  );
    //filter is used to make a new list which conatins only those items for which condition is true. 

}
}

export default Main;
