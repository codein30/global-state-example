import { useContext, useEffect } from 'react';
import { fetchProfile } from '../api.mock';
import PropTypes from 'prop-types';
import { StoreContext } from '../store';
import { refreshProfile } from '../store/actions';

export const User = ({ userType }) => {
  const [, dispatch] = useContext(StoreContext);
  useEffect(() => {
    const loadProfile = async () => {
      const profile = await fetchProfile(userType);
      dispatch(refreshProfile(profile));
    };
    loadProfile();
  }, [userType, dispatch]);

  return null;
};

User.propTypes = {
  userType: PropTypes.string
};
