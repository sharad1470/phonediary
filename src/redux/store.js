import { combineReducers, createStore } from "redux";

import { contactsReducer } from "./reducers/reducer";

const reducer=combineReducers({
    contacts:contactsReducer
})

const store= createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;