import { createAction } from '@reduxjs/toolkit';
import { ThemeState } from '@store/reducers/theme';

const toggle = createAction('theme/toggle');
const toggleThemetAction = (state: ThemeState) => {
  return {
    ...state,
    isDark: !state.isDark,
  };
};

export { toggle, toggleThemetAction };
