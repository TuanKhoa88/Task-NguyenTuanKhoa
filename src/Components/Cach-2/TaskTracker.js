import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { fetchTasks } from './api';


const TaskTracker = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const tasksData = await fetchTasks();
        setTasks(tasksData);
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<TaskList tasks={tasks} onDeleteTask={deleteTask} />}
                />
                <Route path="/close" element={<TaskForm tasks={tasks} onAddTask={addTask} />} />
            </Routes>
        </Router>
    );
};

export default TaskTracker;
