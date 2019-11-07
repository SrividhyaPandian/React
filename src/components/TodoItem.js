import React, { Component } from 'react'
import PropTypes from 'prop-types';

// CSS
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1pz #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    markComplete = (e) => {
        console.log(this.props)
    }
    render() {
        const { id, title } = this.props.todo;
        
        const btnStyle = {
            background: '#ff0000',
            color: '#fff',
            border: 'none',
            padding: '5px 8px',
            boderRadius: '50%',
            cursor: 'pointer',
            float: 'right'
        }
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)}>
                </input> 
                {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo:  PropTypes.func.isRequired
}

export default TodoItem
