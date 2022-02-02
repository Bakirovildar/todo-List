import React, {Component} from 'react'
import './itemAddForm.css'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onChangeInput = (event) => {
        event.preventDefault()
        this.state = {
            label: event.target.value
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form
                className='itemAddForm'
                onSubmit={this.onSubmit}
            >
                <input
                    onChange={this.onChangeInput}
                    type="text"
                    placeholder='add item'
                    />
                <button>
                    add
                </button>
            </form>
        )
    }
}