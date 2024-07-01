import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '@store/reducers/user';

const authenticate = createAction<UserState>('user/authenticate');

const authenticateAction = (
  state: UserState,
  action: PayloadAction<UserState>,
) => {
  return {
    ...state,
    userId: action.payload.userId,
    isAuthenticated: action.payload.isAuthenticated,
  };
};

export { authenticate, authenticateAction };
