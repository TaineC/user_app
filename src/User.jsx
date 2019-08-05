import React, {Component} from 'react';
import './App.css'

class User extends Component{
    constructor(props){
        super(props);

        this.state = {
            nameInput: this.id.name,
            ageInput: this.id.age,
            editInput: false
        }
    }

    removeExistingUser = () => {
        var id = this.props.id;
        this.props.remove(id);
    }

    editExistingUser = () => {
        
    }

    render(){
        return(
            <div className="user">
                <i onClick={this.removeExistingUser} className="far fa-times-circle remove-user"></i>
                <div className="photo"></div>
                <div className="info">
                    <div className="name">
                        {this.props.name}
                    </div>
                    <div className="age">
                        {this.props.age}
                    </div>
                </div>
            </div>
        )
    }
}

export default User;