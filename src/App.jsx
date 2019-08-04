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
        },
        {
          id: 2,
          name: 'Harrison',
          age: '27'
        },
        {
          id: 3,
          name: 'Emma',
          age: '18'
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
    var filter = users.filter(function(item){return item.id !==id});
    this.setState({users:filter});
  }

  updateUser = (id,data) => {

  }

  render(){
    return(
      <div class="container">

        {this.state.users.map((user) => {
          var userProps = {
            ...user,
            key: user.id
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

