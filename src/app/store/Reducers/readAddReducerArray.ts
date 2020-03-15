import * as addRemoveAction from '../actions/addRemoveArrayAction'

const initialArrayState=
[{
    name:"amInitial",
    url:"blank"
}]

export function readAddReducer(state=initialArrayState,action){
    switch(action.type){
        case addRemoveAction.var_add_array:
        return [...state,action.payload]
        case addRemoveAction.var_removeArray:
        const array = [...state];
        array.splice(action.payload, 1);
        return array
        case addRemoveAction.var_doNothing:
        return state
        default :
        return state
    }
    
}