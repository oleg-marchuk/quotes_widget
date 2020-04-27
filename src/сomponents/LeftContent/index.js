import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchInput from './SearchInput';
import ListQuotes from './ListQuotes';
import Pagination from './Pagination';
import ContainerListQuotes from './ContainerListQuotes';

const LeftContent = () => (
    <>
        <View style={styles.containerOne}>
            <SearchInput />
            <ContainerListQuotes />
        </View>
        <View style={styles.containerTwo}>
            <Pagination />
        </View>
    </>
);

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    containerTwo: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default LeftContent;