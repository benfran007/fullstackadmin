import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../models/User';
import { APIStatus } from '../models/APIStatus';
import axios from '../utils/axios';

export interface UsersState {
    status: APIStatus;
    users: User[];
    error?: string;
}

const initialState: UsersState = {
    status: APIStatus.idle,
    users: [
        {
            _id: '1',
            firstname: 'John',
            lastname: 'Doe',
            email: 'jdoe@mail.com',
        },
        { _id: '2', firstname: 'Mary', lastname: 'Jane', email: 'mj@mail.com' },
        {
            _id: '3',
            firstname: 'Tim',
            lastname: 'Duncan',
            email: 'timmy@mail.com',
        },
        {
            _id: '4',
            firstname: 'Joseph',
            lastname: 'Han',
            email: 'joHan@mail.com',
        },
    ],
    error: undefined,
};

export const fetchUsers = createAsyncThunk(
    'usersState/fetchUsers',
    async () => {
        const response = await axios.get('/user');
        return response.data as User[];
    }
);

export const users = createSlice({
    name: 'usersState',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = APIStatus.loading;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = APIStatus.succeeded;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = APIStatus.failed;
                state.error = action.error.message;
            });
    },
});

export const selectFetchUsersState = (state: RootState) => state.users.status;
export const selectUsers = (state: RootState) => state.users.users;

export default users.reducer;
