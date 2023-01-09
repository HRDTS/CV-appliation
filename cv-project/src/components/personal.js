import React, { Component } from "react";
import Render from "./pageRender";

class Personal extends Component {
    constructor() {
        super();

        this.state = {
                name: '',
                email: '',
                phone: '',
                city: '',
            };
            this.handleChangeName = this.handleChangeName.bind(this)
            this.handleChangeEmail = this.handleChangeEmail.bind(this)
            this.handleChangePhone = this.handleChangePhone.bind(this)
            this.handleChangeCity = this.handleChangeCity.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }


    handleChangeName = (e) => {
        this.setState({
                name: e.target.value,
        })
    }

    handleChangeEmail = (e) => {
        this.setState({
                email: e.target.value,
        })
    }

    handleChangePhone = (e) => {
        this.setState({
                phone: e.target.value,
        })
    }

    handleChangeCity = (e) => {
        this.setState({
                city: e.target.value,
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        const { name, email, phone, city } = this.state;

        return (
            <div >
                <form className="personal">
                    <label htmlFor="nameInput">Enter full name</label>
                    <input
                    onChange={this.handleChangeName}
                    value={name}
                    type="text"
                    id="nameInput"
                    />
                    <label htmlFor="emailInput">Enter your email</label>
                    <input
                    onChange={this.handleChangeEmail}
                    value={email}
                    type="text"
                    id="emailInput"
                    />
                    <label htmlFor="phoneInput">Enter your phone</label>
                    <input
                    onChange={this.handleChangePhone}
                    value={phone}
                    type="text"
                    id="phoneInput"
                    />
                    <label htmlFor="cityInput">Enter your city name</label>
                    <input
                    onChange={this.handleChangeCity}
                    value={city}
                    type="text"
                    id="cityInput"
                    />
                    <button type="submit" onClick={this.handleSubmit}>Save changes</button>
                </form>
                <div>{name} <br></br> {email} <br></br> {phone} <br></br> {city}</div>
            </div>
        );
    }
}


export default Personal