import React, { Component } from 'react'

export class Login extends Component {
    state = {
        userID: null
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <div>
                    <form>
                        <label>
                            UserID: 
                            <input type='text' name='username' value={this.state.userID} onChange={(event) => this.setState({userID: event.target.value})}/>
                        </label>
                        <label>
                            Password: 
                            <input type='password' name='password' />
                        </label>
                        <input type='submit' name='login' value='Login' onSubmit={(event) => this.props.loggedIn}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
