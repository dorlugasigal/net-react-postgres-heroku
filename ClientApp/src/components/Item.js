import React, { Component } from 'react'
import './Item.css'

export class Item extends Component {
    render() {
        return (
            <div id={this.props.id} className="itemContainer">
                <div className="itemWrapper">
                    <div className="thumbnail">
                        <img src={this.props.artworkUrl100} alt="" />
                    </div>
                    <div className="content">
                        <h6>{this.props.trackName}</h6>
                        {this.props.artistName}
                    </div>
                </div>
            </div>
        )
    }
}
