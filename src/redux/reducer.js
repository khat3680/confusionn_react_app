import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


export const initialState ={

    dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
};
// state = initialState , means unitll the state is not decided via action, it remains the initial state.
export const Reducer = (state = initialState,action) => {

    return state
};