import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from '../components/Rocket';
import store from '../redux/mainStore';

test('renders learn react link', () => {
  const { rocket } = render(
    <Provider store={store}>
      <Rocket
        id={1}
        name="falcon"
        img="https:/placeimg.com"
        description="none"
        reserved={false}
      />
    </Provider>,
  );
  expect(rocket).toMatchSnapshot();
});
