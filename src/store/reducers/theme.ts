import { createReducer } from '@reduxjs/toolkit';
import { toggle, toggleThemetAction } from '@store/actions/theme';

import { RootState } from '../index';

export interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: false,
};

const themeReducer = createReducer(initialState, builder => {
  builder.addCase(toggle, toggleThemetAction);
});

export const selectCart = (state: RootState) => state.theme.isDark;

export default themeReducer;
