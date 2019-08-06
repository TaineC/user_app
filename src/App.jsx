import React, {Component} from 'react';
import NewUser from './NewUser.jsx';
import User from './User.jsx';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: 'John',
          age: '34'
        }
      ]
    }
  }

  addUser = (data) => {
    var newUser = {
      id: Date.now(),
      ...data
    };
    var userList = [...this.state.users,newUser];
    this.setState({
      users: userList,
    });
  }

  removeUser = (id) => {
    var users = this.state.users;
    var filter = users.filter((item) => {return item.id !==id});
    this.setState({users:filter});
  }

  updateUser = (id,data) => {
    var users = this.state.users;
    var index = users.findIndex(function(user){
      return user.id == id;
    });

    var updateUser = {...users[index],...data};
    users[index] = updateUser;

    this.setState({users});
  }

  render(){
    return(
      <div className="container">

        {this.state.users.map((user) => {
          var userProps = {
            ...user,
            key: user.id,
            remove: this.removeUser,
            update: this.updateUser,
          };
          return(
            <User {...userProps}/>
          )
        })
        }

        <NewUser addUser={this.addUser}/>

      </div>
    )
  }
}

export default App;

