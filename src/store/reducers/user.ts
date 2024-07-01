import { createReducer } from '@reduxjs/toolkit';
import { authenticate, authenticateAction } from '@store/actions/user';

import { RootState } from '../index';

export interface UserState {
  userId: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = { userId: null, isAuthenticated: false };

const userReducer = createReducer(initialState, builder => {
  builder.addCase(authenticate, authenticateAction);
});

export const selectUser = (state: RootState) => state.user.userId;

export default userReducer;
