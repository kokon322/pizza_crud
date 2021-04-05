const initialState = {
    pizza: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ALL_PIZZA' : {
            return {...state, pizza: action.payload};
        }
        case 'UPDATE_PIZZA': {
            return {...state, pizza: action.payload};
        }
        case 'DELETE_PIZZA' : {
            return {...state, pizza: action.payload};
        }
        case 'ADD_NEW_PIZZA': {
            return {...state, pizza: [...state.pizza, action.payload]};
        }
        default: {
            return state;
        }
    }
}