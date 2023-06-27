import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


export default function ShowTaskList() {
    const [tasks, setTasks] = useState(null)
    const [task, setTask] = useState("")
    const [time, setTime] = useState("")
    const [isReminder, setIsReminder] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
   
    useEffect(() => {
        axios.get("http://localhost:3000/tasks")
            .then(res => { setTasks(res.data); console.log(res.data) })
    }, [])

    const handleAddTask = (task, time, isReminder) => {
        axios.post("http://localhost:3000/tasks", {
            "task": task,
            "dayTime": time,
            "isReminder": isReminder
        })
            .then(res => { setTasks([...tasks, res.data]) })
    }

    const handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm Deletion',
            message: 'Are you sure you want to delete?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios
                            .delete('http://localhost:3000/tasks/' + id)
                            .then((res) => {
                                if (res.status === 200) {
                                    setTasks(tasks.filter((task) => task.id !== id));
                                } else {
                                    toast.error('Error');
                                }
                            });
                    }
                    
                },
                {
                    label: 'No',
                    onClick: () => {
                       
                    }
                }
            ]
        });
    };
    return (
        <div className='container'>
            <div className='header' style={{ display: "flex" }}>
                <h1>Task Tracker</h1>
                {!isAdd ? (<button className="close-button" onClick={() => setIsAdd(!isAdd)}>Close</button>) : (<button className="add-btn" onClick={() => setIsAdd(!isAdd)}>Add</button>)}
            </div>

            {!isAdd ? (<div className='form'>
                <div className='form-group'>
                    <label htmlFor="task">Task</label><br />
                    <input autoComplete="off" id="task" type="text" placeholder='Add Task' value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="time">Date & Time</label><br />
                    <input className="input-date" id="time" type="date" placeholder='Add Day & Time' value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className='reminder'>
                    <label className="label-reminder" htmlFor=""><span>Set Reminder</span></label>
                    <input type="checkbox" checked={isReminder} onChange={() => setIsReminder(!isReminder)} />
                </div>
                <button className="add-button" onClick={() => {
                    if (task !== "" && time !== "") {
                        handleAddTask(task, time, isReminder)
                        setTask("")
                        setTime("")
                        setIsReminder(false)
                    }
                    else {
                        toast.error("Please input task and time!")
                    }
                }}>Save Task</button>
            </div>) : (<div></div>)}

            <>
                {tasks?.length > 0 ? (tasks.map((task) => (<div className='task' key={task.id} style={task.isReminder ? { borderLeft: "5px solid green" } : { borderLeft: "5px solid red" }}>
                    <div>
                        <p>{task.task}</p>
                        <p>{task.dayTime}</p>
                    </div>
                    <div>
                        <i onClick={() => handleDelete(task.id)} className="fa-solid fa-x delete-icon"></i>
                    </div>
                </div>))) : (<p>No Tasks To Show</p>)}
                <div className="about">
                    <p>MiniProject API & Asynchronous © 2023</p>
                    <Link to="/about">About</Link>
                </div>
            </>
            <ToastContainer position="top-center" autoClose={1800} />
        </div>
    )
}
