const initialState = {
    start : {
        hours : 0,
        minutes : 0
    },
    end : {
        hours : 0,
        minutes : 0
    }
}

const timeReducer = (state=initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'ADD_START_TIME':
           return {
                ...state,
                start:{
                    hours: payload.hours,
                    minutes: payload.minutes
                }
           } 
        case 'ADD_END_TIME':
           return {
                ...state,
                end:{
                    hours: payload.hours,
                    minutes: payload.minutes
                }
           }
        default: {
            return state;
        }    
    }
}

export default timeReducer;