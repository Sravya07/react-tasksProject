import React from 'react';
import SubTask from './SubTask';

class Task extends React.Component {
    subtasks = ['clean', 'eat'];

    constructor(props) {
        super(props);

        //checked status for every subtask
        this.state = {

        }
    }

    render() {

        const { name } = this.props;
        
        
        //is every subtask existing in the state with true value
        let subTasksChecked = this.subtasks.every((subtask)=>(this.state[subtask]===true));

        return (

            <li key={name}>
                {subTasksChecked?name + " :Done":name}
                <div>
                    {this.subtasks.map((item) => <SubTask key={item} item={item} notifyTask={this.notifyTask.bind(this)}></SubTask>)}
                </div>
            </li>);
    }

    notifyTask(subTaskName, subTaskChecked) {
        this.setState({
            [subTaskName]: subTaskChecked
        })
    }
}
export default Task;