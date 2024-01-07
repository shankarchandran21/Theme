

import React from 'react';
import { TOGGLE_THEME } from '../redux/ThemeAction';
import { connect } from 'react-redux'
const Theme = ({ theme, toggleTheme }) => {
    console.log(theme)
  return (

//for exam you want to replace the className={theme === 'black'?'blackClass':'whiteClass'} with data-testid="theme-container"

    <div className={theme === 'black'?'blackClass':'whiteClass'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};


const mapStateToProps = state =>{
 
    return state
}

const mapDispatchToProps = dispatch=>{
    return {
        toggleTheme:()=>dispatch({type:TOGGLE_THEME})
      };
}



// mapStateToProps is a function in that we get state variable(count),mapDispatchToProps access reducer.
export default connect (mapStateToProps,mapDispatchToProps) (Theme);//connect using to connect redux like this only we want to connect
