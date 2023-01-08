import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import './index.css';
import { store } from './store/store';

// LightSwitch component
const LightSwitch = (props) => {
  console.log(props);
  const { steps , addStep , resetStep} = props;

 
  return (
    <div  >
      You've walked {steps} stes today!
     <br />
     <button className='button purple' onClick={addStep}>Add Step</button>
     <button className='button grey' onClick={resetStep}>Reset Step</button>

  </div>
  );
 
};

const mapStateToProps = state => ({
  steps: state.steps ,
});

const mapDispatchToProps = dispatch => ({
  addStep: () => dispatch({ type: 'ADD_STEP' }),
  resetStep: () => dispatch({ type: 'RESET_STEP' }),
});

const ConnectedLightSwitch = connect(mapStateToProps, mapDispatchToProps)(LightSwitch);

// App component
const App = () => (
  <Provider store={store}>
    <ConnectedLightSwitch />
  </Provider>
);

// render app
render(<App />, document.getElementById('root'));
