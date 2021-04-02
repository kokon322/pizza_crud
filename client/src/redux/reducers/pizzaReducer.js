
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
        case '' : {
            return
        }
        default: {
            return state;
        }
    }
}