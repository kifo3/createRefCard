import React from "react";

export default class Form extends React.Component {
    state = {
        email: '',
        isAgree: false
    }

    HandleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    checkedHandle = (e) => {
        this.setState({isAgree: e.target.checked})
    }



    handleSubmit = () =>{
        const re = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        const isValidEmail = re.test(this.state.email)
        const isValidChecked = this.state.isAgree;

        if(!isValidEmail) {
            alert('Your email is not valid')
            return
        }
        if(!isValidChecked){
            alert('You should accept all termrs & conditions')
            return
        }

        this.setState({email: '', isAgree: false})

        alert('Thank you for subscription')
    }
    render() {
        const {email, isAgree} = this.state
        return(
            <div>
                <h1>Form</h1>

                 <form class="col-md-12 ml-3" >
                     <div class="mb-3 ">
                         <label class="form-label">Email</label>
                         <input
                             class="form-control"
                             type='text'
                             placeholder="Email"
                             name="email"
                             value={email}
                             onBlur={this.validEmail}
                             onChange={this.HandleEmail}
                         />
                     </div>
                     <div class="form-check">
                          <input
                                class="form-check-input"
                                type="checkbox"
                                name="isAgree"
                                checked={isAgree}
                                onChange={this.checkedHandle}
                          />
                          <label class="form-check-label">
                            I agree with terms and conditions
                          </label>
                     </div>
                     <button onClick={this.handleSubmit} type="submit" class="btn btn-primary">Submit</button>

                 </form>

            </div>
        )
    }
}
