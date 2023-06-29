import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/RocketsComponent';
import store from '../redux/mainStore';

test('testing', () => {
  const { test } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(test).toMatchSnapshot();
});
