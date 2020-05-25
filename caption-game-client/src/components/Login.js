import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <div>
                    <form>
                        <label>
                            Username: 
                            <input type='text' name='username' />
                        </label>
                        <label>
                            Password: 
                            <input type='password' name='password' />
                        </label>
                        <input type='submit' name='login' value='Login' />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
