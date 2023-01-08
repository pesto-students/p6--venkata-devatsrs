import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import './index.css';
import { store } from './store/store';

// LightSwitch component
const LightSwitch = ({ isLightOn, toggleLight }) => {

  const lightedness = isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
    the room is {lightedness}
    <br />
    <button onClick={toggleLight}>flip</button>
  </div>
  );
 
};

const mapStateToProps = state => ({
  isLightOn: state.isLightOn,
});

const mapDispatchToProps = dispatch => ({
  toggleLight: () => dispatch({ type: 'TOGGLE_LIGHT' }),
});

const ConnectedLightSwitch = connect(mapStateToProps, mapDispatchToProps)(LightSwitch);

// App component
const App = () => (
  <Provider store={store  }>
    <ConnectedLightSwitch />
  </Provider>
);

// render app
render(<App />, document.getElementById('root'));
