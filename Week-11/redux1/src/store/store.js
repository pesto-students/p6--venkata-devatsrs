
import { createStore } from 'redux';

// reducer
const lightReducer = (state = { isLightOn: false }, action) => {
    switch (action.type) {
      case 'TOGGLE_LIGHT':
        return { isLightOn: !state.isLightOn };
      default:
        return state;
    }
  };
  
  // store
  export const store = createStore(lightReducer);
  