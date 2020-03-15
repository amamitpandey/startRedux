import { createReducer,on } from '@ngrx/store'
import { initialStateAction,state} from '../actions/userChangeAction'

export const initialState = "guest"

const return_reducer = createReducer(initialState,
    on(initialStateAction,state => initialState),
    on(state,state=>{ return "Authuser" })
    )
    
    export function AppReducers(state, action){
        return return_reducer(state,action)
    }