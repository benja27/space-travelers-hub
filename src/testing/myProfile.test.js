import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import store from '../redux/mainStore';

test('testing', () => {
  const { test } = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  expect(MyProfile).toMatchSnapshot();
});
