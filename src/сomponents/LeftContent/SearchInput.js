import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from '@ui-kitten/components';
import { Context } from "../../Reducer/context";
import { listSearch } from "../../Reducer/actions";

export const SearchInput = () => {
    const { state, dispatch } = useContext(Context)

    return (
        <Input
            style={styles.input}
            placeholder='Search'
            value={state.text_search}
            onChangeText={(v) => {
                listSearch(dispatch, v)
            }}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: '#d6d7da',
    }
});

export default SearchInput;