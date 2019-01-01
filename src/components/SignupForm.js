import React, { Component } from 'react';

class SignupForm extends Component {

  state={
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    house_number: '',
    street_name: '',
    city: '',
    state: '',
    zipcode: '',
    email: '',
    dob: ''
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e,user)=>{
      e.preventDefault()
      this.props.handleSignUp(e,user)
      this.setState({
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      house_number: '',
      street_name: '',
      city: '',
      state: '',
      zipcode: '',
      email: '',
      dob: ''
    })
  }

  componentDidMount() {
    this.props.user && this.props.user.person && this.setState({
      username: this.props.user.person.username,
      first_name: this.props.user.person.first_name,
      last_name: this.props.user.person.last_name,
      house_number: this.props.user.person.house_number,
      street_name: this.props.user.person.street_name,
      city: this.props.user.person.city,
      state: this.props.user.person.state,
      zipcode: this.props.user.person.zipcode,
      email: this.props.user.person.email,
      dob: this.props.user.person.date_of_birth
    })
  }

  render() {
    return (
      <div className="container ">
       <div className="col-md-3"></div>
         <div className="col-md-6">
           <div className="row myborder">
               <h4 className="h4-text">Sign Up Now | 100% Free | Full Access</h4><hr/>
               <form onSubmit={(e)=>this.handleSubmit(e,this.state)}>
              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user mycolor"></i></span>
                  <input className="form-control" placeholder="User Name" name="username" type="text" onChange={this.handleChange} value={this.state.username} required/></div><br></br>
            {!this.props.user ? <>
              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock mycolor"></i></span>
                  <input className="form-control" placeholder="Password" name="password" type="password" onChange={this.handleChange} value={this.state.password} required/></div><br></br>
            </> : null}
              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user mycolor"></i></span>
                  <input className="form-control" placeholder="First Name" name="first_name" type="text" onChange={this.handleChange} value={this.state.first_name} required/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user mycolor"></i></span>
                  <input className="form-control" placeholder="Last Name" name="last_name" type="text" onChange={this.handleChange} value={this.state.last_name} required/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="House Number" name="house_number" type="text" onChange={this.handleChange} value={this.state.house_number} required/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="Street Name" name="street_name" type="text" onChange={this.handleChange} value={this.state.street_name} required/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="City" name="city" type="text" onChange={this.handleChange} value={this.state.city} required/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="State" name="state" type="text" onChange={this.handleChange} value={this.state.state} required/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="Zip Code" name="zipcode" type="text" onChange={this.handleChange} value={this.state.zipcode} required/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-envelope mycolor"></i></span>
                  <input className="form-control" placeholder="Email" name="email" type="text" onChange={this.handleChange} value={this.state.email} required/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-gift mycolor"></i></span>
                  <input className="form-control" placeholder="Date of birth ex. 04/05/1996" name="dob" type="text" onChange={this.handleChange} value={this.state.dob} /></div><br></br>

              <div className="row">
                  <div className="col-md-12">
                      <button className="btn-u pull-left" type="submit">Sign Up</button>
                  </div>
              </div>
              </form>
          </div>
          <div className="col-md-2"></div>
      </div>
    </div>
    );
  }

}

export default SignupForm;
