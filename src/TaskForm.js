import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''

        };
    }

    render() {
        return (<form >
            <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)} />
            <input type='button' value='Add Task' onClick={this.handleSubmit.bind(this)}/>
        </form>);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        const { handleInput } = this.props;
        var word = this.state.value;
        this.setState({
            value: ''
        })
        
            handleInput(word);
        
    }
}


export default TaskForm;