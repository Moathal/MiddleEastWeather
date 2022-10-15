import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Country from '../../components/Country/Country';

it('renders Country correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Country />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
