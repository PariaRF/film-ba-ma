import {combineReducers} from "redux";
import { getFullImageReducer } from "./getFullImageReducer";
import { getPopularDetailReducer } from "./getPopularDetailReducer";
import { getPopularReducer } from "./getPopularReducer";

const rootReducer = combineReducers({
    popularState: getPopularReducer, 
    fullUrlImage: getFullImageReducer,
    popularDetailState: getPopularDetailReducer,
})

export default rootReducer;