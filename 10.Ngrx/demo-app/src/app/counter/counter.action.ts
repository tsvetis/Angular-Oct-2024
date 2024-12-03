import { createAction } from '@ngrx/store';

// TYPES
export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';

// ACTIONS
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);
