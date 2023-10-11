import { createReducer } from "@reduxjs/toolkit";
import { loadEvents, filter } from '../actions/eventsActions.js'


const initialState = {
    events : [],
    filtered : [],
    categories : []
}

export const eventReducer = createReducer( initialState, ( builder ) => {
    return builder.addCase( loadEvents, ( state, action ) => {
        const categories = [...new Set(action.payload.map((event) => event.category))]
        const newState = { ...state, events:action.payload, filtered : action.payload, categories : categories }
        return newState
    }).addCase( filter, (state, action) => {
        const newState = {...state}
        const newFiltered = state.events
            .filter( event => ( action.payload.valueSelect == 'all' || event.category == action.payload.valueSelect ) && event.name.includes( action.payload.valueSearch ))
        newState.filtered = newFiltered
        return newState
    } )
})