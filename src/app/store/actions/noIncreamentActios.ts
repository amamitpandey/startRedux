import { createAction } from '@ngrx/store';
// using v9
export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const reset = createAction('Reset');
