import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';

class ListItems extends Component {
  constructor () {
    super();
    this.state = {items: [], loading: true}
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/api/items');
      const { data } = response;
      this.setState({items: data, loading: false});
    } catch(err) {
      this.setState({loading: false})
      console.log(err)
    }
  }

  render() {

    if(this.state.loading) {
      return <div>Loading... </div>
    }

    if(this.state.items.length === 0) {
      return <div>No items</div>
    }

    return (
      <div>
        <Grid>
          {this.state.items.map((item) => {
            return (
              //not working - need to test more
              <div>{item[0]}</div>
            )
          }
          )}
        </Grid>
      </div>
    )
  }
}

export default ListItems