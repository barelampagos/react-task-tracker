import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	const onClick = () => {
		console.log('CLICK');
	};

	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button color='green' text='Add' onClick={onClick} />
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
