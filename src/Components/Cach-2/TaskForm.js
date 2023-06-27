import React, { useState } from 'react';
import { addTask } from './api';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const TaskForm = ({ tasks, onAddTask }) => {
    const [task, setTask] = useState('');
    const [dayTime, setDayTime] = useState('');
    const [reminder, setReminder] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task) {
            toast.error('Please enter a task');
            return;
        }
        const newTask = {
            task,
            dayTime,
            reminder,
        };
        try {
            const addedTask = await addTask(newTask);
            onAddTask(addedTask);
            setTask('');
            setDayTime('');
            setReminder(false);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="table">
            <div>
                <tr>
                    <th><h1 className="text-start">Task Tracker</h1></th>
                    <th><Link to="/" className="btn btn-danger float-end">Close</Link></th>
                </tr>
            </div>
            <div className="mb-3">
                <label className="form-label">Task</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Day & Time</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add Day & Time"
                    value={dayTime}
                    onChange={(e) => setDayTime(e.target.value)}
                />
            </div>

            <tr className="mb-3 form-check">
                <th>  <label className="form-check-label">Set Reminder</label></th>
                <th>  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={reminder}
                    onChange={(e) => setReminder(e.target.checked)}
                /></th>
            </tr>

            <button type="submit" className="btn btn-primary w-80">
                Save Task
            </button>

            <p className="text-start">No Tasks to Show</p>

            <ToastContainer autoClose={1800} />
        </form>
    );
};

export default TaskForm;



// import { deleteTask } from './api';
// import NewTask from './NewTask';
// const [showNoTasks, setShowNoTasks] = useState(true);
// setShowNoTasks(false);
{/* {showNoTasks && <p className="text-start">No Tasks to Show</p>} */ }
{/* <NewTask tasks={tasks} onDeleteTask={deleteTask}></NewTask> */ }