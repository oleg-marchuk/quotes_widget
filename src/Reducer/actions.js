import { LOAD_DATA, SEARCH_TEXT, PREV_PAGE, NEXT_PAGE, VALUE_SELECTION_ITEM } from "./actionTypes";

export const loadData = (dispatch) => {

    const urls = [
        "https://quotes.instaforex.com/api/quotesList",
        "https://quotes.instaforex.com/api/quotesTick"
    ];

    const parseJSON = response => {
        return response.json();
    };

    const resultJSON = data => {
        dispatch({ type: LOAD_DATA, payload: { quotesList: data[0].quotesList, quotesTick: data[1] } })
    };

    Promise.all(urls.map(url => fetch(url).then(parseJSON))).then(resultJSON)

};

export const listSearch = (dispatch, text) => {
    dispatch({ type: SEARCH_TEXT, payload: { text } })
}

export const prevPage = (dispatch) => {
    dispatch({ type: PREV_PAGE })
}

export const nextPage = (dispatch) => {
    dispatch({ type: NEXT_PAGE })
}

export const selectItem = (dispatch, symbol) => {
    dispatch({ type: VALUE_SELECTION_ITEM, payload: { symbol } })
}