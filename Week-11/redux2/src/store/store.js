
import { createStore } from 'redux';

// reducer
const stepReducer = (state = { steps: 0 }, action) => {
    switch (action.type) {
      case 'ADD_STEP':
        return { steps: state.steps+1 };
      case 'RESET_STEP':
        return { steps: 0 };
      default:
        return state;
    }
  };
  
  // store
  export const store = createStore(stepReducer);
  