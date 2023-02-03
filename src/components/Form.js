import React from "react";

export default class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscription: false,
        gender: ''
    }

    changeHandle = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    checkedHandle = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    }

    validateName = () => {
        if(this.state.firstName.length < 3) {
            alert('To`liq ismingizni yozing')
        }
    }

    validEmail = () =>{
        const re = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        if(!re.test(this.state.email)) {
            alert('emailingiz xato')
        }
    }
    render() {
        const {firstName, email, message, select, subscription, gender} = this.state
        return(
            <div>
                <h1>Form</h1>
                <input
                    type='text'
                    placeholder="FirstName"
                    name="firstName"
                    value={firstName}
                    onChange={this.changeHandle}
                    onBlur={this.validateName}
                />
                <input
                    type='text'
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.changeHandle}
                    onBlur={this.validEmail}
                />
                <textarea
                    name="message"
                    value={message}
                    onChange={this.changeHandle}
                    placeholder="Message"
                ></textarea>
                <select name='select' value={select} onChange={this.changeHandle}>
                    <option disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <label>
                    <input type="checkbox" name="subscription" checked={subscription} onChange={this.checkedHandle} />
                    Subscribtion
                </label>

                <label>
                <input type="radio" name="gender" value='male' onChange={this.changeHandle} />Male
                </label>
                <label>
                <input type="radio" name="gender" value='famale' onChange={this.changeHandle} />Famale
                </label>
            </div>
        )
    }
}