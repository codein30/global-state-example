import React, { useContext, useEffect } from 'react';
import lodashGet from 'lodash.get';
import { fetchGreeting } from '../api.mock';
import { StoreContext } from '../store';
import { refreshGreeting } from '../store/actions';

export const Dashboard = () => {
  const [globalState, dispatch] = useContext(StoreContext);
  const goal = lodashGet(globalState, 'profile.goal');
  const userType = lodashGet(globalState, 'userType');
  const greetingContent = lodashGet(globalState, 'greeting');

  useEffect(() => {
    const loadContent = async () => {
      if (!goal) return;

      const greeting = await fetchGreeting(userType, goal);
      dispatch(refreshGreeting(greeting));
    };
    loadContent();
  }, [goal, userType, dispatch]);

  return <h1>{greetingContent}</h1>;
};
