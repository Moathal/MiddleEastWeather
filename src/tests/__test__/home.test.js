import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from '../../components/Home/Home';

it('renders Header correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Home />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
