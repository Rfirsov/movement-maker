import { ADD_MOVEMENT_DATA } from '../constants';

export function addMovementData(movementParam) {
  return {
    type: ADD_MOVEMENT_DATA,
    payload: movementParam
  }
}