import React, { Component } from 'react'
import Item from './Item'
import './styles/ItemsList.css'

export class ItemsList extends Component {
    render() {
        let items = this.props.data.map(function (item, index) {
            return <Item key={index} item={item} />
        })

        return <div className="itemsContainer">{items}</div>
    }
}
