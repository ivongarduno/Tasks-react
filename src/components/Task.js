import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component{

    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none',
            marginTop: '20px'
        }
    }
    render(){
        const {task} = this.props;

        return <div style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} -
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this,task.id)}>
                x
            </button>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}


const btnDelete = {
    fontSize: '16px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%'
}

export default Task;