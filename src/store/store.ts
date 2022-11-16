import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice'

// корневой редьюсер 
const rootReducer = combineReducers({
    userReducer
}) 

// в этой функции мы конфигурируем редакс хранилище 
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

// создаем типы для редюсеров 
export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
