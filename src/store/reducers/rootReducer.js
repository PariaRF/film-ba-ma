import {combineReducers} from "redux";
import { getFullImageReducer } from "./getFullImageReducer";
import { getPopularDetailReducer } from "./getPopularDetailReducer";
import { getPopularReducer } from "./getPopularReducer";
import {getTopCastReducer} from "./getTopCastReducer";

const rootReducer = combineReducers({
    popularState: getPopularReducer, 
    topCastState: getTopCastReducer,
    fullUrlImage: getFullImageReducer,
    popularDetailState: getPopularDetailReducer,
})

export default rootReducer;