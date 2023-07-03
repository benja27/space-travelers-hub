import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionCard from '../components/MissionCard';
import store from '../redux/mainStore';

test('testing', () => {
  const { test } = render(
    <Provider store={store}>
      <MissionCard />
    </Provider>,
  );
  expect(test).toMatchSnapshot();
});
