import ACTION_TYPE from "../actions/action-type";
import initState from "../state/state";

export const getPopularDetailReducer = (state= initState, action)=>{
    switch (action.type) {
        case ACTION_TYPE.GET_POPULAR_DETAIL:
            return{
                ...state,
                getPopularDetail: action.payload
            }
    
        default:
          return{
              ...state
          }
    }
}