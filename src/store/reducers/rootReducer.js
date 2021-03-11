import {combineReducers} from "redux";
import { getFullImageReducer } from "./getFullImageReducer";
import { getPopularDetailReducer } from "./getPopularDetailReducer";
import { getPopularReducer } from "./getPopularReducer";
import { getSearchReducer } from "./getSearchReducer";

const rootReducer = combineReducers({
    popularState: getPopularReducer, 
    fullUrlImage: getFullImageReducer,
    popularDetailState: getPopularDetailReducer,
    searchState : getSearchReducer,
})

export default rootReducer;