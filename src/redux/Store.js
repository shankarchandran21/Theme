import { createStore } from "redux";
import themeReducer from './ThemeReducer';

const initialState = {
    theme: 'black',
  };


const store = createStore(themeReducer,initialState);

export default store;