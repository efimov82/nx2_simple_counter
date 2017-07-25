import { ActionReducer, Action } from '@ngrx/store';

export const COUNTER1_NEW_VALUE = 'COUNTER1_NEW_VALUE';
export const COUNTER2_NEW_VALUE = 'COUNTER2_NEW_VALUE';

export function counter1Reducer(state: any = [], action: Action) {
  switch (action.type) {
    case COUNTER1_NEW_VALUE:
      return action.payload;

    default:
      return state;
  }
}

export function counter2Reducer(state: any = [], action: Action) {
  switch (action.type) {
    case COUNTER2_NEW_VALUE:
      return action.payload;

    default:
      return state;
  }
}
