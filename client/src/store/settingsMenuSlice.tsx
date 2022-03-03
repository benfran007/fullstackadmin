import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface SettingsMenuState {
    value: boolean;
}

const initialState: SettingsMenuState = {
    value: false,
};

export const settingsMenu = createSlice({
    name: 'settingsMenu',
    initialState,
    reducers: {
        setSettingsMenu: (state, actions: PayloadAction<boolean>) => {
            state.value = actions.payload;
        },
    },
});

export const { setSettingsMenu } = settingsMenu.actions;

export const selectSettingsMenu = (state: RootState) =>
    state.settingsMenu.value;

export default settingsMenu.reducer;
