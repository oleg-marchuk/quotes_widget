import React, { useContext } from 'react';
import {
    TouchableOpacity
} from 'react-native'
import {
    Icon,
    Text
} from '@ui-kitten/components';
import { Context } from "../../Reducer/context";
import { prevPage, nextPage } from "../../Reducer/actions";

const Pagination = () => {
    const { state, dispatch } = useContext(Context)

    let lock = true
    let view_count_page = state.current_page * 10

    if (view_count_page > state.count_item) {
        view_count_page = state.count_item
        lock = false
    }

    return (
        <>
            <TouchableOpacity onPress={() => { prevPage(dispatch) }}>
                <Icon
                    name='arrow-left-outline'
                    width={50}
                    height={50}
                    fill='#FF7E6D'
                />
            </TouchableOpacity>
            <Text>{view_count_page} of {state.count_item}</Text>
            <TouchableOpacity onPress={() => {
                if (lock) {
                    nextPage(dispatch)
                }
            }}>
                <Icon
                    name='arrow-right-outline'
                    width={50}
                    height={50}
                    fill='#FF7E6D'
                />
            </TouchableOpacity>
        </>
    )
};

export default Pagination;