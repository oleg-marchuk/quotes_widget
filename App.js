import React, { useReducer } from "react";
import {
  ApplicationProvider,
  IconRegistry
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
  mapping,
  dark as theme,
} from '@eva-design/eva';
import { quotesReducer } from "./src/Reducer/quotesReducer";
import { Context } from "./src/Reducer/context";
import { initState } from "./src/Reducer/initState";
import Main from './src/Main';

const App = () => {
  const [state, dispatch] = useReducer(quotesReducer, initState);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <Context.Provider value={{ state, dispatch }}>
          <Main />
        </Context.Provider>
      </ApplicationProvider>
    </>
  )
};

export default App;
