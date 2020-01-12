import React, { Component } from 'react';
import { Items } from "./Item"

export class ItemsList extends Component {

  render() {
    let items = this.props.data.map(function (item, index) {
      return <Item key={index} {...item}></Item>
    });

    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}
