import { createAction } from "@reduxjs/toolkit";


export const loadEvents = createAction( 'load_events', ( events ) => {
    return {
        payload: events
    }
} )

export const filter = createAction( 'filter', ( valueSearch, valueSelect ) => {
    return {
        payload : {
            valueSearch : valueSearch,
            valueSelect: valueSelect
        }
    }
} )