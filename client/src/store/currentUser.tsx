import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../models/User';
import { APIStatus } from '../models/APIStatus';
import axios from '../utils/axios';

export interface CurrentUserState {
    status: APIStatus;
    user: User;
    error?: string;
}

const initialState: CurrentUserState = {
    status: APIStatus.idle,
    user: {
        _id: '1',
        firstname: 'John',
        lastname: 'Doe',
        email: 'jdoe@mail.com',
    },
    error: undefined,
};

export const fetchUser = createAsyncThunk('currentUser/fetchUser', async () => {
    const response = await axios.get('/user/1');
    return response.data as User;
});

export const currentUser = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, actions) => {
            state.user = actions.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = APIStatus.loading;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = APIStatus.succeeded;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = APIStatus.failed;
                state.error = action.error.message;
            });
    },
});
export const { setCurrentUser } = currentUser.actions;
export const selectFetchCurrentUserState = (state: RootState) =>
    state.currentUser.status;
export const selectCurrentUser = (state: RootState) => state.currentUser.user;

export const currentUserReducer = currentUser.reducer;
