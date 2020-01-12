import React, { Component } from 'react'

export class Details extends Component {
    constructor(props) {
        super(props)
        this.state = { item: {} }
    }
    componentDidMount() {
        debugger
        const { item } = this.props.location.item
        this.setState({ item })
    }

    render() {
        return (
            <div className="details-wrapper">
                {this.props.store.item}
                {this.props.store.item}
                {this.props.store.item}
                {this.props.store.item}
                {this.props.store.item}
                {this.props.store.item}
                {this.props.store.item}
                <div className="itemWrapper">
                    <div className="thumbnail">
                        <img src={this.state.item.artworkUrl100} alt="" />
                    </div>
                    <div className="content">
                        <h6>{this.state.item.trackName}</h6>
                        {this.state.item.artistName}
                    </div>
                </div>
                <div className="details-expanded">
                    {this.state.item.trackName && (
                        <div className="detail-line">
                            {/* <img src={TrackIcon} /> */}
                            <span>{this.state.item.trackName}</span>
                        </div>
                    )}
                    {this.state.item.artistName && (
                        <div className="detail-line">
                            {/* <img src={ArtistIcon} /> */}
                            <span>{this.state.item.artistName}</span>
                        </div>
                    )}
                    {this.state.item.collectionName && (
                        <div className="detail-line">
                            {/* <img src={AlbumIcon} /> */}
                            <span>{this.state.item.collectionName}</span>
                        </div>
                    )}
                </div>
                <div className="details-preview">
                    {this.state.item.kind === 'song' && (
                        <div className="preview">
                            <audio controls>
                                <source
                                    src={this.state.item.results.previewUrl}
                                />
                            </audio>
                        </div>
                    )}
                    {this.state.item.kind === 'music-video' && (
                        <div className="preview">
                            <video controls>
                                <source
                                    src={this.state.item.results.previewUrl}
                                />
                            </video>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
