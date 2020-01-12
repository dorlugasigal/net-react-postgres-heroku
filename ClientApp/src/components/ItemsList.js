import React, { Component } from 'react'
import { Item } from './Item'
import './ItemsList.css'

export class ItemsList extends Component {
    render() {
        let items = this.props.data.map(function(item, index) {
            return <Item key={index} {...item} />
        })

        return <div className="itemsContainer">{items}</div>
    }
}
