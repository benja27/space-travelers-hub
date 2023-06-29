import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

test('renders learn react link', () => {
  const { nav } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  expect(nav).toMatchSnapshot();
});
