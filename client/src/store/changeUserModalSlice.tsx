import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ChangeUserModal {
    value: boolean;
}

const initialState: ChangeUserModal = {
    value: false,
};

export const changeUserModal = createSlice({
    name: 'changeUserModal',
    initialState,
    reducers: {
        setChangeUserModal: (state, actions: PayloadAction<boolean>) => {
            state.value = actions.payload;
        },
    },
});

export const { setChangeUserModal } = changeUserModal.actions;

export const selectChangeUserModal = (state: RootState) =>
    state.changeUserModal.value;

export default changeUserModal.reducer;
