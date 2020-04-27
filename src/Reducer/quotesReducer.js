import { LOAD_DATA, SEARCH_TEXT, PREV_PAGE, NEXT_PAGE, VALUE_SELECTION_ITEM } from "./actionTypes";
import { searchList } from "../lib";

export const quotesReducer = (state, action) => {
    let list = []

    switch (action.type) {
        case LOAD_DATA: {
            return Object.assign({}, state, {
                quotesList: action.payload.quotesList,
                quotesTick: action.payload.quotesTick,
                count_item: action.payload.quotesList.length
            })
        }
        case SEARCH_TEXT: {
            let list_length = 0;
            if (action.payload.text.length === 0) {
                list = []
                list_length = state.quotesList.length
            } else {
                list = searchList(state.quotesList, action.payload.text)
                list_length = list.length
            }
            return Object.assign({}, state, {
                quotesFragmentList: list,
                text_search: action.payload.text,
                current_page: 1,
                count_item: list_length
            })
        }
        case PREV_PAGE: {
            if (state.current_page === 1) {
                return state;
            }

            return Object.assign({}, state, { current_page: state.current_page - 1 })
        }
        case NEXT_PAGE: {
            return Object.assign({}, state, { current_page: state.current_page + 1 })
        }
        case VALUE_SELECTION_ITEM: {

            let foundQuotes = state.quotesTick.find(item => item.symbol === action.payload.symbol) || {}

            if(Object.keys(foundQuotes).length === 0) {
                foundQuotes = state.quotesList.find(item => item.symbol === action.payload.symbol)
            }

            return Object.assign({}, state, { quotesTickInfo: foundQuotes })
        }
        default:
            return state;
    }
};