import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Layout
} from '@ui-kitten/components';
import LeftContent from './сomponents/LeftContent';
import RightContent from './сomponents/RightContent';
import { Context } from "./Reducer/context";
import { loadData } from "./Reducer/actions";

export const Main = () => {
  const { state, dispatch } = useContext(Context);
  
  useEffect(() => {
    loadData(dispatch)
  }, []);

  return (
    <Layout style={styles.container}>

      <View style={styles.subContainer} level='1'>
        <LeftContent />
      </View>

      <View style={[styles.subContainer, styles.borderContainer]} level='2'>
        <RightContent />
      </View>

    </Layout>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  subContainer: {
    flex: 1
  },
  borderContainer: {
    borderLeftColor: 'white',
    borderLeftWidth: 1,
  }
});

export default Main;