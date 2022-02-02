import React, {Component} from "react";
import './todoListItem.css'

class ListItem extends Component {

    render() {
        const {label, onClickDone, onClickImportant, done, important} = this.props

        let classItem = 'todo-list-item'
        if (done) {
            classItem += ' done'
        }

        if (important) {
            classItem += ' important'
        }


        return (
            <div className={classItem}>
                <span
                    className='todo-list-item-label'
                    onClick={onClickDone}
                >{label}</span>
                <div>
                    <button
                        type='button'
                        className='btn btn-outline-success btn-sm'
                        onClick={ onClickImportant }>
                        <i className='fa fa-exclamation'/>
                    </button>

                    <button
                        type='button'
                        className='btn btn-outline-success btn-sm border-trash'
                        onClick={this.props.onDeleted}
                    >
                        <i className='fa fa-trash-o' style={{color: 'red'}}/>
                    </button>
                </div>
            </div>
        )
    }
}


export default ListItem