import React from "react";
import ListItem from "../todo_list_item/TodoListItem";
import './TodoList.css'

const TodoList = ({todos, onDeleted, onClickDone, onClickImportant}) => {

    const elements = todos.map(item => {

        const { id, ...propsItem } = item

        return (
            <li key={ id } className='list-group-item'>
                <ListItem
                    onClickDone={() => onClickDone(id)}
                    onClickImportant={() => onClickImportant(id)}
                    onDeleted={() => onDeleted(id) }
                    { ...propsItem }
                />
            </li>
        )
    })

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
}

export default TodoList