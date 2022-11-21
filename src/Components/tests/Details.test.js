import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../Redux/configureStore';
import Details from '../Details';

describe('Details page test', () => {
  test('render details page', () => {
    const view = render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
    expect(view).toMatchSnapshot();
  });
});
