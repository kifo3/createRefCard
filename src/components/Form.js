import React from "react";

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            card: '',
            cv: '',
            name: '',
        };
        this.cardRef = React.createRef();
        this.cvRef = React.createRef();
        this.nameRef = React.createRef();
    }


    HandleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            if(this.state.card.length === 16) {
                this.cvRef.current.focus();
            }

            if(this.state.cv.length === 3) {
                this.nameRef.current.focus();
            }
        })
    }

    componentDidMount() {
        this.cardRef.current.focus()
    }

    handleSubmit = () =>{

        if(!this.state.card) {
            alert('Please enter card number')
            return
        }
        if(!this.state.cv){
            alert('CV number invalid')
            return
        }

        this.setState({card: '', cv: '', name: ''})

        alert('Thank you for subscription')
    }



    render() {
        const {card, cv, name} = this.state
        return(
            <div>
                <h1>Form</h1>

                 <form class="row ml-3" >
                     <div class="col-md-8 mb-3">
                         <input
                             class="form-control"
                             type='text'
                             placeholder="Card Number"
                             name="card"
                             value={card}
                             ref={this.cardRef}
                             onChange={this.HandleChange}
                         />
                     </div>
                     <div class="col-md-4 mb-3 ">
                         <input
                             class="form-control"
                             type='text'
                             placeholder="CV"
                             name="cv"
                             value={cv}
                             ref={this.cvRef}
                             onChange={this.HandleChange}
                         />
                     </div>
                     <div class="col-md-12 mb-3 ">
                         <input
                             class="form-control"
                             type='text'
                             placeholder="Name"
                             name="name"
                             value={name}
                             ref={this.nameRef}
                             onChange={this.HandleChange}
                         />
                     </div>
                      <button onClick={this.handleSubmit} type="submit" class="btn btn-primary">Submit</button>
                 </form>

            </div>
        )
    }
}
