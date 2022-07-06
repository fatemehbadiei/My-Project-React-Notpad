import React, {Component} from "react";


// class Task extends Component{
//     state={
//
//     }
//     render() {
//         const{id,text} =this.props.task
//         return(
//             <>
//                 <tr>
//                     <td>
//                         <input type="checkbox" onChange={this.props.onCheck}/>
//                     </td>
//                     <td>
//                         {id}
//                     </td>
//                     <td>
//                         {text}
//                     </td>
//                     <td>
//                         <button className="btn btn-danger btn-sm" onClick={this.props.onDelete}>X</button>
//                     </td>
//                     <td>
//                         <input type="text" onChange={this.props.onEdit}/>
//                     </td>
//                 </tr>
//             </>
//
//         )
//     }
// }
// export default Task;


// class Task extends Component{
//     state={
//
//     }
//     render() {
//         const{id,text} =this.props.task
//
//         let check = <td>{text}</td>
//         if (this.props.task.onCheck === true){
//             check = (
//                 <td>
//                     <del>
//                         {text}
//                     </del>
//                 </td>
//             )
//         }
//         return(
//             <>
//                 <tr>
//                     <td>
//                         <input type="checkbox" onChange={this.props.onCheck}/>
//                     </td>
//                     <td>
//                         {id}
//                     </td>
//
//                     {check}
//
//                     <td>
//                         <button className="btn btn-danger btn-sm" onClick={this.props.onDelete}>X</button>
//                     </td>
//                     <td>
//                         <input type="text" onChange={this.props.onEdit}/>
//                     </td>
//                 </tr>
//             </>
//
//         )
//     }
// }
// export default Task;


class Task extends Component {
    state = {}

    render() {
        const {id, text} = this.props.task;
        // let check = <td>{text}</td>
        // if (this.props.task.onCheck){
        //     check = (
        //         <td>
        //             <del>{text}</del>
        //         </td>
        //     )
        // }
        return (
            <>
                <tr>
                    <td><input type="checkbox" onChange={this.props.onCheck}/></td>
                    <td>{id}</td>
                    <td>{text}</td>
                    <td><button onClick={this.props.onDelete}>X</button></td>
                    <td><input type="text" onChange={this.props.onEdit}/></td>
                </tr>
            </>

        )
    }
}

export default Task;