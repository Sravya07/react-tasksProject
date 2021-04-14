import React from 'react';
import { createStore } from 'redux';

class SubTask extends React.Component {
    // SUBTASK_CHECKED = 'SUBTASK_CHECKED';
    store = createStore(this.checkSubTaskReducer.bind(this));
    unsubscribe = ()=> {};

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.unsubscribe = this.store.subscribe(()=>{this.forceUpdate()});
    }


    render() {
        const { item } = this.props;
        const { checked } = this.store.getState();
        
        return (<label htmlFor={item}>
            <input type="checkbox" onChange={this.handleChange.bind(this)} id={item} />
            {checked ? item + 'checked' : item}
        </label>);
    }

    handleChange(event) {
        const checked = event.target.checked;
        this.store.dispatch(this.subtaskActionCreator({
            checked: checked
        }))
    }

    subtaskActionCreator(subtask) {
        return {
            type: 'SUBTASK_CHECKED',
            subtask
        }
    }

    checkSubTaskReducer(state = {}, action) {
        console.log("reducer invoked");
        if (action.type === 'SUBTASK_CHECKED') {
            return { checked: !state.checked };
        }
        else {
            return state;
        }
    }

}

export default SubTask;