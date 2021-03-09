import ACTION_TYPE from "../actions/action-type";
import initState from "../state/state";

export const getPopularReducer = (state = initState,action)=>{
    switch (action.type) {
        case ACTION_TYPE.GET_POPULAR:
            return{
                ...state,
                getPopular : action.payload
            }
            
    
        default:
            return{
                ...state
            }
    }
}

