import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/noIncreamentActios';

export const initialState = 0;

// v9 
const _counterReducer = createReducer(initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(reset, state => {return 0}),
    )
    
    export function SecondApproachReducer(state, action) {
        return _counterReducer(state, action);
    }
    
    
    