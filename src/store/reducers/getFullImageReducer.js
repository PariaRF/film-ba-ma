import ACTION_TYPE from "../actions/action-type";
import initState from "../state/state";

export const getFullImageReducer = (state = initState, action) =>{
    switch (action.type) {
        case ACTION_TYPE.GET_FULL_URL_IMG:
            return{
                ...state,
                getFullUrlImage : action.payload
            }
    
        default:
            return{
                ...state
            }
    }
}