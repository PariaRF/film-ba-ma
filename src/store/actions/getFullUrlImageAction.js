import ACTION_TYPE from "./action-type";

const getFullUrlImageAction = async (dispatch) => {
    const fullUrlForImage = await fetch("https://api.themoviedb.org/3/configuration?api_key=0cee88507afe180aa4425676f52cef52")
    const response = await fullUrlForImage.json();
    return dispatch(fullUrlForImageAction(response));
}

const fullUrlForImageAction = (response) => {
    return {
        type: ACTION_TYPE.GET_FULL_URL_IMG,
        payload: response
    }
}

export { getFullUrlImageAction, fullUrlForImageAction };