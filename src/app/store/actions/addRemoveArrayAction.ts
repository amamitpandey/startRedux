// using v7 ngRx
import { Action } from "@ngrx/store"
import { arrayInterface } from '../arrayInterface' // for data type we are using interface
// we can use any instead of arrayInterface

// [arrayInface] for unique indentifier we can use normal any string remove
export const var_add_array = '[arrayInface] add'
export const var_removeArray = 'remove'
export const var_doNothing = '[arrayInface] doNothing'

// here payload means argument
export class addArray implements Action{
    readonly type = var_add_array
    constructor(public payload:arrayInterface){}
}

export class removeArray implements Action{
    readonly type = var_removeArray
    constructor(public payload:number){}
}

export class doNothing implements Action{
    readonly type = var_doNothing
}

export type Actions = addArray | removeArray | doNothing