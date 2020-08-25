import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'


// Comments
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload : {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
            //error handling
        .then(response => {
            if(response.ok){
                return response;
            }
            // this first error handler is used when we RECEIVE a error response from server
            else{
                var error = new Error('Error ' + response.status +': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        // this second error handles when we DONT RECEIVE a response from the server
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
})

// Dishes
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
    
})

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
        .then(response => {
            if(response.ok){
                return response;
            }
            // this first error handler is used when we RECEIVE a error response from server
            else{
                var error = new Error('Error ' + response.status +': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        // this second error handles when we DONT RECEIVE a response from the server
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});



// Promo
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok){
                return response;
            }
            // this first error handler is used when we RECEIVE a error response from server
            else{
                var error = new Error('Error ' + response.status +': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        // this second error handles when we DONT RECEIVE a response from the server
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}

export const promosFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
}) 