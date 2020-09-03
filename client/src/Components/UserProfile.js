import React from 'react';
import { Grid, Cell } from 'react-mdl'

const UserProfile = (props) => {
    const {user} = props;
    return (
      <Grid>
        <Cell col={2}>
          <div style={{textAlign: 'Left'}}>
            <img src={user.imageUrl} alt='A person icon' style={{height: '50px'}} />
          </div>
        </Cell>
        <Cell col={10}>
          <p><a href="/users/`${user.id}`">{user.name}</a> || {user.address} || {user.email}</p>
          <hr style={{borderTop: '3px solid #833fb2'}}/>
        </Cell>
      </Grid>
    )
}

export default UserProfile;