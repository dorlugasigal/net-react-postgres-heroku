import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/Item.css'
import { observer } from 'mobx-react'

export class Item extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.store.item = 5
    }
    render() {
        return (
            <div
                id={this.props.id}
                className="itemContainer"
                onClick={this.handleClick}
            >
                <div className="itemWrapper">
                    <div className="thumbnail">
                        <img src={this.props.item.artworkUrl100} alt="" />
                    </div>
                    <div className="content">
                        <h6>{this.props.item.trackName}</h6>
                        {this.props.item.artistName}
                    </div>
                </div>
            </div>
        )
    }
}
