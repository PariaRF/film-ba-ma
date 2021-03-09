import {combineReducers} from "redux";
import { getFullImageReducer } from "./getFullImageReducer";
import { getPopularReducer } from "./getPopularReducer";
import {getTopCastReducer} from "./getTopCastReducer";

const rootReducer = combineReducers({
    popularState: getPopularReducer, 
    topCastState: getTopCastReducer,
    fullUrlImage: getFullImageReducer,
})

export default rootReducer;