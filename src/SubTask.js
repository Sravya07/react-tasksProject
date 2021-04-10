import React from 'react';

class SubTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };
    }

    render() {
        const { item } = this.props;
        const { checked } = this.state;

        return (<label htmlFor={item}>
            <input type="checkbox" onChange={this.handleChange.bind(this)} id={item} />
            {checked ? item + 'checked' : item}
        </label>);
    }

    handleChange(event) {
        this.setState({
            checked: event.target.checked
        })
        this.props.notifyTask(this.props.item, event.target.checked);
    }
}

export default SubTask;