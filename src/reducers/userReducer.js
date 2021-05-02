const initialState = {
    name:""
}

const userReducer = (state = initialState, action) =>  {
    const {type, payload} = action;

    switch(type) {
        case 'NEW_USER': 
            return {
                ...state,
                name:payload
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                name:""
            }
        default:
            return state;
    }
}

export default userReducer;