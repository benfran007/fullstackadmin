import { configureStore } from '@reduxjs/toolkit';
import changeUserModalReducer from './changeUserModalSlice';
import { currentUserReducer } from './currentUser';
import settingsMenuReducer from './settingsMenuSlice';
import usersReducer from './usersSlice';

const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        settingsMenu: settingsMenuReducer,
        changeUserModal: changeUserModalReducer,
        users: usersReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
