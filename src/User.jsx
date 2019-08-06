import React, {Component} from 'react';
import './App.css'

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            updateName: false,
            updateAge: false,
            nameInput: props.name,
            ageInput: props.age,
        }
    }

    removeExistingUser = () => {
        var id = this.props.id;
        this.props.remove(id);
    }

    nameClick = () => {
        this.setState({updateName: true});
    }

    ageClick = () => {
        this.setState({updateAge: true});
    }

    nameEdit = (e) => {
        this.setState({nameInput: e.target.value});
    }

    ageEdit = (e) => {
        this.setState({ageInput: e.target.value});
    }

    nameBlur = () => {
        var id = this.props.id;
        var data = {name: this.state.nameInput};
        this.props.update(id,data);
        this.setState({updateName: false});
    }

    ageBlur = () => {
        var id = this.props.id;
        var data = {age: this.state.ageInput};
        this.props.update(id,data);
        this.setState({updateAge: false});
    }

    render(){
        return(
            <div className="user">
                <i onClick={this.removeExistingUser} className="far fa-times-circle remove-user"></i>
                <div className="photo"></div>
                <div className="info">
                    <div className="name" onDoubleClick={this.nameClick} onBlur={this.nameBlur}>
                        {this.state.updateName ? (
                        <input autoFocus type="text" className="form-control" value={this.state.nameInput} onChange={this.nameEdit}/>
                        ) : this.props.name}
                    </div>
                    <div className="age" onDoubleClick={this.ageClick} onBlur={this.ageBlur}>
                        {this.state.updateAge ? (
                            <input autoFocus type="text" className="form-control" value={this.state.ageInput} onChange={this.ageEdit}/>
                        ) : this.props.age}
                    </div>
                </div>
            </div>
        )
    }
}

export default User;