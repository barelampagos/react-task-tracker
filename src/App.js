import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from 'react';

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);
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

	// Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;

		const newTask = {
			id,
			...task
		};

		setTasks([...tasks, newTask]);
		console.log(newTask);
	};

	// Delete Task
	const deleteTask = (id) => {
		setTasks(
			tasks.filter((task) => {
				return task.id !== id;
			})
		);
	};

	// Toggle reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className='container'>
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAddTask={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No tasks'
			)}
		</div>
	);
};

export default App;
