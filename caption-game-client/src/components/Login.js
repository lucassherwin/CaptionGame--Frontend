import React, { Component } from 'react'

export class Login extends Component {
    /*
    how to get current user id

    IDEA 1: 
    use an array of all userObj's each time someone logs in they are put in the array
    can search array and find a userObj with a specific user name
    can also be used for validation and making sure usernames are unique

    IDEA 2:
    an id variable that gets increased each time a user is created and assinged to a userObj
    
    IDEA 3: 
    do another fetch to get all the users from the db and then search over that array 
    basically the same as idea 1 except this would requrie another fetch rather than being stored in state

    IDEA 4:
    initialize state with all users from db when page first loads and have a seperate object for current user
    would have to filter for current user
     */

    state = {
        currentUserID: null,
        userObj: {
            username: '',
            password: ''
        }
    }

    handleUsername = (event) => {
        // event.preventDefault();
        this.setState({userObj: {...this.state.userObj, username: event.target.value}})

        // console.log(this.state.userObj.username)
    }

    handlePassword = (event) => {
        // event.preventDefault();
        this.setState({userObj: {...this.state.userObj, password: event.target.value}})

        // console.log(this.state.userObj.password)
    }

    handleLogin = (event) => {
        event.preventDefault();
        // console.log('username: ', this.state.userObj.username)
        // console.log('password: ', this.state.userObj.password)

        //set current user ID here
        this.setState({currentUserID: this.state.userObj.id})
        console.log('current user id: ', this.state.userObj.id)

        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: this.state.userObj.username, password: this.state.userObj.password})
        })
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <div>
                    <form>
                        <label>
                            Username: 
                            <input type='text' name='username' onChange={(event) => this.handleUsername(event)}/>
                        </label>
                        <label>
                            Password: 
                            <input type='password' name='password' onChange={(event) => this.handlePassword(event)} />
                        </label>
                        <input type='submit' name='login' value='Login' onClick={(event) => this.props.findUser(event, this.state.userObj.username)}/>
                        <input type='submit' name='signup' value='Sign Up' onClick={(event) => this.handleLogin(event)}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
