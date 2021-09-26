import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Do thing 1',
			day: 'Jan 1 at 2pm',
			reminder: true
		},
		{
			id: 2,
			text: 'Do thing 2',
			day: 'Feb 2 at 2pm',
			reminder: true
		},
		{
			id: 3,
			text: 'Do thing 3',
			day: 'Mar 3 at 2pm',
			reminder: false
		}
	]);

	return (
		<div className='container'>
			<Header />
			<Tasks tasks={tasks} />
		</div>
	);
};

export default App;
