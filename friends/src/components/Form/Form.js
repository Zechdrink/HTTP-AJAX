import React from 'react';

class Form extends React.Component {
    constructor(props){
        super();
        this.state = { 
        name: "",
        age: "",
        email: ""
    }
    }

    handleChanges = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() { 
        return ( 
        <div>
            <form className = "form">
                <input 
                value = {this.name}
                type = "text"
                placeholder = "name..."
                onChange = {this.handleChanges}
                />
            </form>

            <form>
                <input 
                value = {this.age}
                type = "number"
                placeholder = "age..."
                onChange = {this.handleChanges}
                />
            </form>

            <form>
                <input 
                value = {this.email}
                type = "text"
                placeholder = "email..."
                onChange = {this.handleChanges}
                />
            </form>
        </div>
          );
    }
}
 
export default Form;