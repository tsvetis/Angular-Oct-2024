import { Action } from '@ngrx/store';

// Initial State
export const defaultMsg = 'Hello';

// ACTIONS
export const BG = 'BG';
export const IT = 'IT';
export const EN = 'EN';

export function translateReducer(state = defaultMsg, action: Action) {
  switch (action.type) {
    case BG:
      return (state = 'Здрасти!');
    case EN:
      return (state = 'Hello!');
    case IT:
      return (state = 'Ciao!');

    default:
      return state;
  }
}
