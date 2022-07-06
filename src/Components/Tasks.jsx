import React, {Component} from "react";
import Task from "./Task";

// class Tasks extends Component{
//     state={
//
//     }
//     render() {
//         return (
//             <div className="container">
//                 <table className="table table-hover">
//                     <thead className="thead-dark">
//                     <tr>
//                         <th scope="col">Done</th>
//                         <th scope="col">Id</th>
//                         <th scope="col">Task</th>
//                         <th scope="col">Delete</th>
//                         <th scope="col">Edit</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//
//                     {this.props.tasks.map(task=> <Task key={task.id} task={task} onDelete={()=> this.props.onDeleteApp(task.id)} onEdit={(event)=> this.props.onEditApp(event,task.id)} onCheck={(event)=>this.props.onCheckApp(event,task.text,task.id)}/>)}
//
//                     </tbody>
//                 </table>
//             </div>
//
//         )
//     }
// }
// export default Tasks;


// class Tasks extends Component{
//     state={
//
//     }
//     render() {
//         return (
//             <div className="container">
//                 <table className="table table-hover">
//                     <thead className="thead-dark">
//                     <tr>
//                         <th scope="col">Done</th>
//                         <th scope="col">Id</th>
//                         <th scope="col">Task</th>
//                         <th scope="col">Delete</th>
//                         <th scope="col">Edit</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//
//                     {this.props.tasks.map(task=> <Task key={task.id} task={task} onDelete={()=> this.props.onDeleteApp(task.id)} onEdit={(event)=> this.props.onEditApp(event,task.id)} onCheck={(event)=>this.props.onCheckApp(event,task.id)}/>)}
//
//                     </tbody>
//                 </table>
//             </div>
//
//         )
//     }
// }
// export default Tasks;


class Tasks extends Component {
    state = {}

    render() {
        return (
            <tbody>
                    {this.props.tasks.map(task => <Task key={task.id} task={task} onDelete={()=>this.props.onDeleteApp(task.id)} onEdit={(event)=>this.props.onEditApp(event,task.id)} onCheck={(event)=>this.props.onCheckApp(event,task.id,task.text)}/>)}
            </tbody>
        )
    }
}

export default Tasks;