import { ADD_MOVEMENT_DATA } from '../constants';

const initialState = {
  movementData: []
};

export function movement(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVEMENT_DATA:
      return {
        movementData: [...state.movementData, action.payload]
      }
    default: return state;
  }
}