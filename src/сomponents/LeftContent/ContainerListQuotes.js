import React, { useContext } from 'react';
import ListQuotes from './ListQuotes';
import { Context } from "../../Reducer/context";
import { paginatedArray, searchList } from "../../lib";

const ContainerListQuotes = () => {
    const { state } = useContext(Context);
    let dataList = []

    if(state.quotesFragmentList.length === 0) {
        dataList = paginatedArray(state.quotesList, state.current_page)
    } else {
        dataList = paginatedArray(state.quotesFragmentList, state.current_page)
    }

    return (<ListQuotes dataList={dataList} />)
}

export default ContainerListQuotes;