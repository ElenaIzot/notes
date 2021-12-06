import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { noteReducer } from "./noteReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    notes: noteReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;