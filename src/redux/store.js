import { configureStore } from "@reduxjs/toolkit";

import { eventReducer } from './reducers/eventsReducer.js'

export const store = configureStore(  {
    reducer : {
        storeEvents: eventReducer,   
    }
}  )