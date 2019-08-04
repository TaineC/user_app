import React, {Component} from 'react';
import './App.css'

class NewUser extends Component{
    constructor(props){
        super(props);
            this.state = {
                nameInput: '',
                ageInput: ''
            }
    }

    nameInputChange = (e) => {
        this.setState({
            nameInput: e.target.value
        });
    }

    ageInputChange = (e) => {
        this.setState({
            ageInput: e.target.value
        });
    }

    submitNewUser = (e) => {
        e.preventDefault();
        var data = {
            name: this.state.nameInput,
            age: this.state.ageInput
        }

        this.props.addUser(data);
    }

    render(){
        return(
            <div class="user new-user">
                <form class="add-new-user">
                    <button class="add-photo">Add Photo</button>
                    <input onChange={this.nameInputChange} type="text" class="add-name" placeholder="Name"/>
                    <input onChange={this.ageInputChange} type="text" class="add-age" placeholder="Age"/>
                    <button onClick={this.submitNewUser} class="add-user" type="submit">Add User</button>
                </form>
            </div>
        )
    }
}

export default NewUser
