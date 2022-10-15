import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';
import Details from '../../components/Details/Details';

it('renders Details correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
