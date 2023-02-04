import React from 'react';
import { connect } from 'react-redux';

const Room = ({ isLightOn, toggleLight }) => (
  <div>
    <p>The light is {isLightOn ? 'on' : 'off'}</p>
    <button onClick={toggleLight}>Toggle light</button>
  </div>
);

const mapStateToProps = state => ({
  isLightOn: state.isLightOn,
});

const mapDispatchToProps = dispatch => ({
  toggleLight: () => dispatch({ type: 'TOGGLE_LIGHT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
