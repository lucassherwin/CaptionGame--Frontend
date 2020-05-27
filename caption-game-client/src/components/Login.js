import React, { Component } from 'react'

export class Login extends Component {
    state = {
        userID: null,
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
                            UserID: 
                            <input type='text' name='username' onChange={(event) => this.handleUsername(event)}/>
                        </label>
                        <label>
                            Password: 
                            <input type='password' name='password' onChange={(event) => this.handlePassword(event)} />
                        </label>
                        <input type='submit' name='login' value='Login' onClick={(event) => this.handleLogin(event)}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
