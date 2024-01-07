import { TOGGLE_THEME } from './ThemeAction';



const themeReducer = (state , action) => {
  
    if(action.type ===  TOGGLE_THEME){
      return {
        ...state,
        theme: state.theme === 'black' ? 'white' : 'black',
      };
    }
    return state
};

export default themeReducer;