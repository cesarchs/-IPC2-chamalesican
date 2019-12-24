
import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Login2 extends Component {


    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: "",
            loginErrors: "",
            user: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state.form,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }


    handleSubmit(event) {
        const { user, password } = this.state;

        axios.post("http://localhost:4000/Login",
                {
                    user: {
                        user2: user,
                        password: password
                    }
                },
            )
            .then(response => {
                console.log("res from login", response);
                if (response.data.usuario === "cesar") {
                    alert("Bienvenido administrador" +
                        "\nid:");
                    this.props.history.push('/pageAdmin');
                } else {
                    alert("credenciales incorrectas");
                }
            })


            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="password">
                            <label htmlFor="firstName">User</label>
                            <input type="text" 
                                className="" 
                                placeholder="user"
                                name="user"
                                noValidate
                                onChange={this.handleChange}
                            ></input>


                        </div>
                        <div className="password">
                            <label htmlFor="email">Contraseña</label>
                            <input
                                type="password" 
                                className="" 
                                placeholder="Contraseña" 
                                name="password"
                                noValidate
                                onChange={this.handleChange}>

                            </input>
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <Link>
                                Crear cuenta
                            </Link>
                        </div>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Login2;
