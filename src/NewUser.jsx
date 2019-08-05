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
            <div className="user new-user">
                <form className="add-new-user">
                    <button className="add-photo">Add Photo</button>
                    <input onChange={this.nameInputChange} className="add-name" type="text" placeholder="Name"/>
                    <input onChange={this.ageInputChange} className="add-age" type="text" placeholder="Age"/>
                    <button onClick={this.submitNewUser} className="add-user" type="submit">Add User</button>
                </form>
            </div>
        )
    }
}

export default NewUser
