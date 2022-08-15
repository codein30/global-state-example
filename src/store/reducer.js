import { REFRESH_GREETING, REFRESH_PROFILE } from './actionTypes';

export const initialState = {
  userType: 'consultant',
  profile: null,
  greeting: '',
  content: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case REFRESH_GREETING:
      return {
        ...state,
        greeting: action.greeting
      };
    case REFRESH_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};
