// import React from 'react'
// import { deleteTask } from './api';

// export default function NewTask({ tasks, onDeleteTask }) {
//     const handleDeleteTask = async (id) => {
//         await deleteTask(id);
//         onDeleteTask(id);
//     };
//     return (
//         <div>
//             <tbody>
//                 {tasks.map((task) => (
//                     <tr key={task.id}>
//                         <td className="text-start">
//                             <p>{task.task}</p>
//                             <p>{task.dayTime}</p>
//                         </td>
//                         <td className="text-end">
//                             <i onClick={() => handleDeleteTask(task.id)} className="fa-solid fa-x"></i>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </div>
//     )
// }
