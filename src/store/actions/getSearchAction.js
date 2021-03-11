import ACTION_TYPE from "./action-type";

const getSearchAction = async (dispatch,title) => {
    const urlGetSearch = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0cee88507afe180aa4425676f52cef52&language=en-US&query=${title}&page=1&include_adult=false`)
    const response = await urlGetSearch.json();
    return dispatch(searchAction(response));
}

const searchAction = (response) => {
    return {
        type: ACTION_TYPE.GET_SEARCH,
        payload: response
    }
}

export { getSearchAction, searchAction };