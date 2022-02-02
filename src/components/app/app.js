import React, {Component} from "react";
import HeaderTodo from "../header_todo/HeaderTodo";
import SearchTodo from "../search_todo/SearchTodo";
import TodoList from "../todo_list/TodoList";
import ItemAddForm from "../item_add_form/itemAddForm";


export default class App extends Component {

    state = {
        todoData: [
            {label: 'learn React', important: false, done: false, id: 1},
            {label: 'drink Coffee', important: false, done: false, id: 2},
            {label: 'drink Tea', important: false, done: false, id: 3},
        ],
        term: '',
        filter: ''

    }

    onDeleted = id => {
        this.setState(({todoData}) => {
            const todoData2 = [...this.state.todoData]
            const idx = todoData.findIndex(list => list.id === id)
            todoData2.splice(idx, 1)

            return {
                todoData: todoData2
            }
        })
    }

    addItem = text => {
        const todoData = [...this.state.todoData]
        const id = todoData.length + 11
        const item = {label: text, important: false, done: false, id}

        todoData.push(item)
        console.log(item)

        this.setState((state) => {
            return {
                todoData: todoData
            }
        })

    }

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex(list => list.id === id)
        const oldItem = arr[idx]
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        }

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onClickImportant = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(this.state.todoData, id, 'important')
            }
        })
    }

    onClickDone = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(this.state.todoData, id, 'done')
            }
        })
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items
            case 'active':
                return items.filter(item => !item.done)
            case 'done':
                return items.filter(item => item.done)
            default :
                return items
        }
    }

    search = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => item.label.indexOf(term) > -1)
    }

    onSearch = (text) => {
        this.setState({term: text})
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    render() {

        const {todoData, term, filter} = this.state

        const visibleItems = this.filter(this.search(todoData, term), filter)
        const doneCount = todoData.filter(list => list.done).length
        const countData = todoData.length - doneCount

        return (
            <div className='index'>
                <HeaderTodo toDo={countData} done={doneCount}/>
                <SearchTodo
                    onSearch={this.onSearch}
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
                <TodoList
                    onDeleted={this.onDeleted}
                    todos={visibleItems}
                    onClickImportant={this.onClickImportant}
                    onClickDone={this.onClickDone}
                />
                <ItemAddForm addItem={this.addItem}/>
            </div>)
    }
}