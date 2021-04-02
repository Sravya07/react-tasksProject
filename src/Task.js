import SubTask from './SubTask';

function Task({name}) {
    const subtasks = ['clean','eat'];
    return (
        <li key={name}>
            {name}
            <div>
                {subtasks.map((item)=> <SubTask key={item} item={item}></SubTask>)}   
            </div>
        </li>);
}

export default Task;