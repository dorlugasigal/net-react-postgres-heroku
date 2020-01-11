import React, { Component } from 'react';

export class Item extends Component {

  render() {
    return (
      <div id={this.props.id} className="commentList">
        <h3>{this.props.title}</h3>
        <h4>{this.props.data}</h4>
      </div>
    );
  }
}
