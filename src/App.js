import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ['Breakfast', 'Lunch', 'Dinner']
    }
  }

  render() {
    const { tasks } = this.state;
    // console.log(tasks);
    return (
      <div className="App">
        <h1>Welcome Sravya</h1>
        <TaskForm handleInput={this.handleInput.bind(this)} />
        <ol>
          {tasks.map((item) => <Task key={item} name={item}></Task>)}
        </ol>
        <Link to={{ pathname: `/location/${tasks.length}` }}><input type="button" value="Show Tasks"></input></Link>
      </div>
    );
  }

  handleInput(word) {

    this.setState(prevState => {
      if (word) {
        return { tasks: prevState.tasks.concat(word) };
      }
    });
  }
}

export default App;
