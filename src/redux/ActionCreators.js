import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

// Action
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload : {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// THUNK
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}
// Action
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

//Action
export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

// Action
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
    
})