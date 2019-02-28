import React from 'react';
// import axios from 'axios';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            person : {
             name: "",  
             age: "",
             email: ""
    }
}
    }

    handleChanges = (event) => {
     event.persist();
        this.setState(prevState => {
            return {
                person: {
                    ...prevState.person,
                    [event.target.name]: event.target.value
                }
            }
        })

    } // End of Handle Changes


    postPerson = (event) => {   
        this.props.postPersonToServer(event, this.state.person);
        this.setState({ person: {name: '', age: '', email:'' }});
    }

    render() { 
        return ( 
        <div>
            <form className = "form" onSubmit = {this.postPerson}> 
                
                <input 
                name = "name"
                value = {this.state.person.name}
                type = "text"
                placeholder = "name..."
                onChange = {this.handleChanges}
                />
            

           
                <input 
                name = "age"
                value = {this.state.person.age}
                type = "number"
                placeholder = "age..."
                onChange = {this.handleChanges}
                />
            

           
                <input 
                name = "email"
                value = {this.state.person.email}
                type = "text"
                placeholder = "email..."
                onChange = {this.handleChanges}
                />
            </form>
            <button type = "submit" onClick = {this.postPerson}>Submit</button>
        </div>
          );
    }
}
 
export default Form;