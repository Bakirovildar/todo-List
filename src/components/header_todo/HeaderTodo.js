import React from "react";
import './HeaderTodo.css'

const HeaderTodo = ({toDo, done}) => {

    return (
        <div>
            <h1 className='header-todo'>My TODO list</h1>
            <div><span>{toDo} more to do, {done} done</span>
            </div>
        </div>
    )
}

export default HeaderTodo