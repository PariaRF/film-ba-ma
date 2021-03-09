// import axios from "axios";
import ACTION_TYPE from "./action-type";

const getPopularAction = async (dispatch) => {
    const urlGetPopular = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=0cee88507afe180aa4425676f52cef52&language=en-US&page=1")
    const response = await urlGetPopular.json();
    return dispatch(popularAction(response));
}

const popularAction = (response) => {
    return {
        type: ACTION_TYPE.GET_POPULAR,
        payload: response
    }
}

export { getPopularAction, popularAction };