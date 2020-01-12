import React, { Component } from 'react'
import { connect } from "react-redux"
import { LinkContainer } from 'react-router-bootstrap'

import './styles/Item.css'

class Item extends Component {
    constructor(props, context) {
        super(props, context)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.dispatch({ type: "NEW_ITEM", payload: this.props.item })
    }
    render() {
        return (
            <LinkContainer to="/details">
                <div
                    id={this.props.id}
                    className="itemContainer"
                    onClick={this.handleClick}
                >
                    <div className="itemWrapper">
                        <div className="thumbnail">
                            <img className="img-thumbnail" src={this.props.item.artworkUrl100} alt="" />
                        </div>
                        <div className="content">
                            <h6>{this.props.item.trackName}</h6>
                            {this.props.item.artistName}
                        </div>
                    </div>
                </div>
            </LinkContainer>
        )
    }
}
const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(Item)