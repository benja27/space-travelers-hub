import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import NoPage from '../components/NoPage';
import store from '../redux/mainStore';

test('renders learn react link', () => {
  const { noPage } = render(
    <Provider store={store}>
      <NoPage />
    </Provider>,
  );
  expect(noPage).toMatchSnapshot();
});
