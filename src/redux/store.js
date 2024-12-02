import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import reduxStroge from './storage'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'

const persistConfig = {
    key:'root',
    storage: reduxStroge,
    whitelist:['game'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store=configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions:[FLUSH,REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST],
        },
    }),
})

export const persistor = persistStore(store)