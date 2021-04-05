
const initialState = {
    pizza: []
}

export const reducer = (state = initialState,action) => {
    switch (action.type) {
        case 'ADD_ALL_PIZZA' :{
            return {...state, pizza: action.payload}
        }
        case 'UPDATE_PIZZA': {
            return
        }
        case 'DELETE_PIZZA' : {
            return
        }
        case 'ADD_NEW_PIZZA': {
            return
        }
        default: {
            return state;
        }
    }
}