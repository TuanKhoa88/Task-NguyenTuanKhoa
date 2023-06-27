import React from 'react';
import { deleteTask } from './api';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, onDeleteTask }) => {
    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        onDeleteTask(id);
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="2">
                        <h1 className="text-start">Task Tracker</h1>
                    </th>
                    <th>
                        <Link to="/close" className="btn btn-success float-end">Add</Link>
                    </th>
                </tr>
            </thead>
            <tbody >
                {/*                 
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td className="text-start task-reminder">
                            <p>{task.task}</p>
                            <p>{task.dayTime}</p> 
                        </td>
                        <td className="text-end">
                            <i onClick={() => handleDeleteTask(task.id)} className="fa-solid fa-x"></i>
                        </td>
                    </tr>
                ))} */}
                {tasks?.map((task) => (<div className='task text-start' key={task.id} style={task.isReminder ? { borderLeft: "5px solid green" } : {}}>
                    <p>{task.task}</p>
                    <p>{task.dayTime}</p>
                    <button onClick={() => handleDeleteTask(task.id)}>X</button>
                </div>))}
            </tbody>

        </table>
    );
};

export default TaskList;


// import NewTask from './NewTask';
{/* <NewTask tasks={tasks} onDeleteTask={deleteTask}></NewTask> */ }