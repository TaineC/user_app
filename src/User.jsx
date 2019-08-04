import React, {Component} from 'react';
import './App.css'

class User extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="user">
                <i onClick={(e) => {this.removeUser(e.id)}} className="far fa-times-circle remove-user"></i>
                <div class="photo"></div>
                <div class="info">
                    <div class="name">
                        {this.props.name}
                    </div>
                    <div class="age">
                        {this.props.age}
                    </div>
                </div>
            </div>
        )
    }
}

export default User;