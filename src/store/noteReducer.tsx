import { Action, Note } from "../Models";

const ADD_NOTE = 'ADD_NOTE';

interface State {
    notes: Note[];
}

export function noteReducer (state: State = initState , action: Action): State{
    switch(action.type){
        case ADD_NOTE:
            const notes = [...state.notes, action.payload]
            return  {...state, notes}   
        default:
            return state;
    }
}

let initState: State = {
    notes: []
};

export const addNote = (note: any) => ({type: ADD_NOTE, payload: note});