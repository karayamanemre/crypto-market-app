import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../Home';
import { store } from '../../Redux/configureStore';

describe('Home page test', () => {
  test('Render home page', () => {
    const view = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
