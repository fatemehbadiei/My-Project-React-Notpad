import React, {Component} from "react";
import Tasks from "./Components/Tasks";


// class App extends Component {
//     state = {
//         tasks: [],
//         newTask: "",
//         showTask: false,
//         done : false
//     }
//
//     handleSubmit(event) {
//         event.preventDefault();
//     }
//
//     showAndRemove = () => {
//         this.setState({showTask: !this.state.showTask})
//     }
//
//     deleteEveryNote = (id) => {
//         const tasks = this.state.tasks.filter(task => task.id !== id);
//         this.setState({tasks});
//     }
//
//     editEveryNote = (event, id) => {
//         const taskIndex = this.state.tasks.findIndex(task => task.id === id);
//         const tasks = [...this.state.tasks];
//         tasks[taskIndex].text = event.target.value;
//         this.setState({tasks});
//     }
//
//     setTask = (event) => {
//         this.setState({newTask: event.target.value})
//     }
//
//     handleNewTask = () => {
//         const tasks = [...this.state.tasks];
//         const task = {
//             id: Math.floor(Math.random() * 100),
//             text: this.state.newTask
//         }
//         tasks.push(task);
//         this.setState({tasks, newTask: ""})
//     }
//
//     checkEveryNote = (event,text,id) => {
//
//         if (event.target.checked) {
//             const taskIndex = this.state.tasks.findIndex(task => task.id === id);
//             const tasks = [...this.state.tasks];
//             tasks[taskIndex].text = <del>{text}</del>;
//             this.setState({tasks});
//         }
//         else if(event.target.checked === false) {
//             const taskIndex = this.state.tasks.findIndex(task => task.id === id);
//             const tasks = [...this.state.tasks];
//             tasks[taskIndex].text = text.props.children;
//             this.setState({tasks});
//
//         }
//
//     }
//
//
//     render() {
//         let showingTheTask = null;
//         if (this.state.showTask) {
//             showingTheTask =
//                 <Tasks tasks={this.state.tasks} onDeleteApp={this.deleteEveryNote} onEditApp={this.editEveryNote}
//                        onCheckApp={this.checkEveryNote}/>
//         }
//         return (
//
//             <div className="container">
//                 <h1 className="m-3 text-secondary">Task App</h1>
//                 <form onSubmit={this.handleSubmit} className="form-inline mb-4">
//                     <div className="form-group mr-1 ml-3">
//                         <input type="text" className="form-control shadow-sm" placeholder="Write task"
//                                onChange={this.setTask} value={this.state.newTask}/>
//                     </div>
//                     <button className="btn btn-info mr-1" onClick={this.handleNewTask}>Add task</button>
//                     <button className="btn btn-info" onClick={this.showAndRemove}>Show tasks</button>
//                 </form>
//
//                 {showingTheTask}
//             </div>
//         )
//     }
// }
//
// export default App;


// class App extends Component {
//     state = {
//         tasks: [],
//         newTask: "",
//         showTask: false,
//
//     }
//
//     handleSubmit(event) {
//         event.preventDefault();
//     }
//
//     showAndRemove = () => {
//         this.setState({showTask: !this.state.showTask})
//     }
//
//     deleteEveryNote = (id) => {
//         const tasks = this.state.tasks.filter(task => task.id !== id);
//         this.setState({tasks});
//     }
//
//     editEveryNote = (event, id) => {
//         const taskIndex = this.state.tasks.findIndex(task => task.id === id);
//         const tasks = [...this.state.tasks];
//         tasks[taskIndex].text = event.target.value;
//         this.setState({tasks});
//     }
//
//     setTask = (event) => {
//         this.setState({newTask: event.target.value})
//     }
//
//     handleNewTask = () => {
//         const tasks = [...this.state.tasks];
//         const task = {
//             id: Math.floor(Math.random() * 100),
//             text: this.state.newTask
//         }
//         tasks.push(task);
//         this.setState({tasks, newTask: ""})
//     }
//
//
//
//     checkEveryNote = (event,id) => {
//         const taskIndex = this.state.tasks.findIndex(task => task.id === id);
//         const tasks = [...this.state.tasks];
//         tasks[taskIndex].onCheck = event.target.checked;
//         this.setState({tasks});
//     }
//
//
//     render() {
//         let showingTheTask = null;
//         if (this.state.showTask) {
//             showingTheTask =
//                 <Tasks tasks={this.state.tasks} onDeleteApp={this.deleteEveryNote} onEditApp={this.editEveryNote}
//                        onCheckApp={this.checkEveryNote}/>
//         }
//         return (
//
//             <div className="container">
//                 <h1 className="m-3 text-secondary">Task App</h1>
//                 <form onSubmit={this.handleSubmit} className="form-inline mb-4">
//                     <div className="form-group mr-1 ml-3">
//                         <input type="text" className="form-control shadow-sm" placeholder="Write task"
//                                onChange={this.setTask} value={this.state.newTask}/>
//                     </div>
//                     <button className="btn btn-info mr-1" onClick={this.handleNewTask}>Add task</button>
//                     <button className="btn btn-info" onClick={this.showAndRemove}>Show tasks</button>
//                 </form>
//
//                 {showingTheTask}
//             </div>
//         )
//     }
// }
//
// export default App;


class App extends Component {
    state = {
        tasks: [],
        newTask: "",
        showTasks: false,
        done : false
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    setTasks = (event) => {
        this.setState({newTask: event.target.value});
    }

    handleNewTask = () => {
        const tasks = [...this.state.tasks];
        const task = {
            id: Math.floor(Math.random() * 100),
            text: this.state.newTask
        }
        tasks.push(task);
        this.setState({tasks, newTask: ""});

    }

    showAndRemove = () => {
        this.setState({showTasks: !this.state.showTasks});
    }

    deleteEveryTask = (id) =>{
        const tasks = this.state.tasks.filter(task=> task.id !== id);
        this.setState({tasks})
    }

    editEveryTask =(event,id) =>{
        const tasks = [...this.state.tasks];
        const taskIndex = this.state.tasks.findIndex(task => task.id === id);
        tasks[taskIndex].text = event.target.value;
        this.setState({tasks});
    }

    checkEveryTask =(event,id,text)=>{
        this.setState({done : event.target.checked});
        const tasks = [...this.state.tasks];
        const taskIndex = this.state.tasks.findIndex(task => task.id === id);

        if(this.state.done === true){
            tasks[taskIndex].text = <del>{text}</del>;
            this.setState({tasks});

        }else if(this.state.done === false){
            tasks[taskIndex].text = text.props.children;
            this.setState({tasks});
        }
    }


    render() {
        let showingTheTasks = null;
        if (this.state.showTasks) {
            showingTheTasks = (
                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Done</th>
                        <th scope="col">Id</th>
                        <th scope="col">Task</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                    </thead>
                        <Tasks tasks={this.state.tasks} onDeleteApp={this.deleteEveryTask} onEditApp={this.editEveryTask} onCheckApp={this.checkEveryTask}/>
                </table>
            )

        }
        return (
            <div className="container">
                <h1 className="text-secondary">Task App</h1>
                <form className="form-inline mb-4" onSubmit={this.handleSubmit}>
                    <div className="form-group mr-3 mb-2">
                        <input type="text" className="form-control" placeholder="Write Task" onChange={this.setTasks} value={this.state.newTask}/>
                    </div>
                    <button className="btn btn-primary mr-2" onClick={this.handleNewTask}>Add task</button>
                    <button className="btn btn-primary" onClick={this.showAndRemove}>Show tasks</button>
                </form>
                {showingTheTasks}
            </div>
        )
    }
}

export default App;