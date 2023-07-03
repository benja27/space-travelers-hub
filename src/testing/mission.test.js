import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/mainStore';

test('renders learn react link', () => {
  const { miss } = render(
    <MemoryRouter>
      <Provider store={store}>
        <Missions />
      </Provider>
    </MemoryRouter>,
  );
  expect(miss).toMatchSnapshot();
});
