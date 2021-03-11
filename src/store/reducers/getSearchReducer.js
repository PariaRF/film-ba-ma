import ACTION_TYPE from "../actions/action-type";
import initState from "../state/state";

export const getSearchReducer = (state= initState, action)=>{
    switch (action.type) {
        case ACTION_TYPE.GET_SEARCH:
            return{
                ...state,
                getSearch: action.payload
            }
    
        default:
          return{
              ...state
          }
    }
}