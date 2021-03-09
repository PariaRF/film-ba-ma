import rootReducer from "./reducers/rootReducer";
const { createStore, applyMiddleware } = require("@reduxjs/toolkit");
const { default: thunk } = require("redux-thunk");

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;