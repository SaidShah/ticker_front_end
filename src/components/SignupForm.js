import React, { Component } from 'react';

class SignupForm extends Component {

  render() {
    return (
      <div className="container ">
      <div className="col-md-3"></div>
      <div className="col-md-6">
           <div className="row myborder">
               <h4 className="h4-text">Sign Up Now | 100% Free | Full Access</h4><hr/>
              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user mycolor"></i></span>
                  <input className="form-control" placeholder="User Name" name="username" type="text"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock mycolor"></i></span>
                  <input className="form-control" placeholder="Password" name="password" type="password"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user mycolor"></i></span>
                  <input className="form-control" placeholder="First Name" name="first_name" type="text"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user mycolor"></i></span>
                  <input className="form-control" placeholder="Last Name" name="last_name" type="text"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="House Number" name="house_number" type="text"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="Street Name" name="street_name" type="text"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="City" name="city" type="text"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="State" name="state" type="text"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-home mycolor"></i></span>
                  <input className="form-control" placeholder="Zip Code" name="zipcode" type="text"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-envelope mycolor"></i></span>
                  <input className="form-control" placeholder="Email" name="email" type="text"/></div><br></br>

              <div className="input-group margin-bottom-20">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-gift mycolor"></i></span>
                  <input className="form-control" placeholder="Date of birth ex. 04/05/1996" name="dob" type="text"/></div><br></br>

              <div className="row">
                  <div className="col-md-12">
                      <button className="btn-u pull-left" type="submit">Sign Up</button>
                  </div>
              </div>
          </div>
          <div className="col-md-2"></div>
      </div>
        </div>
    );
  }

}

export default SignupForm;
