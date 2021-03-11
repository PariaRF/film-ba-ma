import ACTION_TYPE from "./action-type";

const getPopularDetailAction = async (dispatch,id) => {
    const urlGetPopularDetail = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0cee88507afe180aa4425676f52cef52&language=en-US`)
    const response = await urlGetPopularDetail.json();
    return dispatch(popularDetainAction(response));
}

const popularDetainAction = (response) => {
    return {
        type: ACTION_TYPE.GET_POPULAR_DETAIL,
        payload: response
    }
}

export { getPopularDetailAction, popularDetainAction };