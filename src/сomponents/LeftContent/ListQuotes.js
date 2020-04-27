import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import {
    List,
    ListItem,
} from '@ui-kitten/components'
import { Context } from "../../Reducer/context"
import { selectItem } from "../../Reducer/actions"

const RenderItem = ({item, dispatch}) => {
    return (<ListItem style={styles.container} onPress={() => { selectItem(dispatch, item.symbol) }} title={`${item.symbol}`} />)
}

const ListQuotes = (props) => {
    const { dispatch } = useContext(Context)
    return (
        <List
            data={props.dataList}
            renderItem={({item}) => <RenderItem item={item} dispatch={dispatch} />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 2
    }
});

export default ListQuotes