import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';
import UserProfile from './UserProfile';

class User extends Component {
  constructor () {
    super();
    this.state = {users: [], loading: true}
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/api/users');
      const { data } = response;
      this.setState({users: data, loading: false});
    } catch(err) {
      this.setState({loading: false})
      console.log(err)
    }
  }

  render() {

    if(this.state.loading) {
      return <div>Loading... </div>
    }

    if(this.state.users.length === 0) {
      return <div>No users</div>
    }

    return (
      <div>
        <Grid>

          {this.state.users.map((user) => {
            return (
                <UserProfile user={user}/>
            )
          }
          )}
        </Grid>
      </div>
    )
  }
}
export default User

