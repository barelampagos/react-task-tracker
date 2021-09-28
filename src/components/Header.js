import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Button from './Button';

const Header = ({ title, onAdd, showAddTask }) => {
	const location = useLocation();

	return (
		<header className='header'>
			<h1>{title}</h1>
			{location.pathname === '/' && (
				<Button
					color={showAddTask ? 'red' : 'green'}
					text={showAddTask ? 'Close' : 'Add'}
					onClick={onAdd}
				/>
			)}
		</header>
	);
};

// Set default values if no prop received
Header.defaultProps = {
	title: 'Task Tracker'
};

// Set prop data types
Header.propTypes = {
	title: PropTypes.string.isRequired
};

// Can pass along CSS inline JS (<Component style={headingStyle} />)
const headingStyle = {
	color: 'red',
	backgroundColor: 'black'
};

export default Header;
