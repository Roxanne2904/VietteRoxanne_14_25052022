import { configureStore } from '@reduxjs/toolkit'
//*reducers
import toggleModalReducer from '../components/CreateEmployeesForm/toggleModalReducer'
import employeesReducer from '../components/CreateEmployeesForm/employeesReducer'
//*redux-persist
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const reducer = combineReducers({
    toggleModal: toggleModalReducer,
    employees: employeesReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)
//-------------------------
const store = configureStore({
    reducer: {
        persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export default store
//-------------------------
