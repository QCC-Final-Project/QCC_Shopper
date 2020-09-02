import React, { Component } from 'react';

class ListItems extends Component {

  constructor() {
    super();

    this.state = {
      items: ['red', 'blue']
    }
  };

  componentDidMount() {

  };

  render () {
    return(
      <>
        <div>List Items Page</div>
        <div>{this.state.items}</div>
      </>
    )
  };
};

export default ListItems;