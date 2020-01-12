import React, { Component } from 'react'
import { connect } from "react-redux"
import "./styles/Details.css"
class Details extends Component {
    render() {
        return (<div>

            {this.props.item &&
                <div className="detailsWrapper">
                    <div className="thumbnailWrapper">
                        <img src={this.props.item.artworkUrl100} alt="" />
                    </div>
                    {this.props.item.trackName && (
                        <div className="itemInfo">
                            <span><b>Track Name:</b> {this.props.item.trackName}</span>
                        </div>
                    )}
                    {this.props.item.artistName && (
                        <div className="itemInfo">
                            <span><b>Artist:</b> {this.props.item.artistName}</span>
                        </div>
                    )}
                    {this.props.item.collectionName && (
                        <div className="itemInfo">
                            <span><b>Collection:</b> {this.props.item.collectionName}</span>
                        </div>
                    )}
                    <div className="details-preview">
                        {this.props.item.kind === 'song' && (
                            <div className="media">
                                <audio controls>
                                    <source
                                        src={this.props.item.previewUrl}
                                    />
                                </audio>
                            </div>
                        )}
                        {this.props.item.kind === 'feature-movie' && (
                            <div className="media">
                                <video controls>
                                    <source
                                        src={this.props.item.previewUrl}
                                    />
                                </video>
                            </div>
                        )}
                    </div>
                </div>}
            {!this.props.item && <div> No item selected</div>}
        </div>


        )
    }
}
const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps)(Details) 