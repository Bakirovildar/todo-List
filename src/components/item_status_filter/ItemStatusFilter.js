import React, { Component } from "react";
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ]


    render() {
        const { filter, onFilterChange } = this.props

        return (
            <div className='btn-group'>
                { this.buttons.map(button => {
                    const isActive = filter === button.name
                    const cls = []
                    isActive
                        ? cls.push('btn-info')
                        : cls.push('btn-outline-secondary')
                    return (
                        <button
                            key={button.name}
                            type='button'
                            className={`btn ${cls.join('')}`}
                            onClick={() => onFilterChange(button.name) }>{button.label}</button>
                    )
                }) }
            </div>
        )
    }
}

