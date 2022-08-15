import { REFRESH_GREETING, REFRESH_PROFILE } from './actionTypes';

export const refreshGreeting = greeting => ({
  type: REFRESH_GREETING,
  greeting
});

export const refreshProfile = profile => ({
  type: REFRESH_PROFILE,
  profile
});
