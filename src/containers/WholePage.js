import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../App.css";
import HomeContainer from "../containers/HomeContainer";
import MarketplaceContainer from "../containers/MarketplaceContainer";
import StockDataContainer from "../containers/StockDataContainer";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import Account from "../components/Account";

class WholePage extends Component {
  state = {
    user: " ",
    isChanged: false
  };

  handleEdit = (e, user) => {
    let user_id = this.props.currentUser.person.id;
    fetch(`http://localhost:3000/users/${user_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          user_id: user_id,
          first_name: user.first_name,
          last_name: user.last_name,
          house_number: user.house_number,
          street_name: user.street_name,
          city: user.city,
          state: user.state,
          zipcode: user.zipcode,
          date_of_birth: user.dob,
          username: user.username,
          email: user.email
        }
      })
    })
      .then(res => res.json())
      .then(user => {
        this.props.handleEdit(user);
      });
  };

  componentDidMount() {
    this.forceUpdate();
    let token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/current_user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Action: "application/json",
          Authorization: `${token}`
        }
      })
        .then(res => res.json())
        .then(user => {
          localStorage.setItem("token", user.jwt);
          this.props.setUser(user.user);
        });
    }
  }

  render() {
    return (
      <div>
        <NavBar
          givenUser={this.props.givenUser}
          currentUser={this.props.currentUser}
          handleLogout={this.props.handleLogout}
        />
        <Switch>
          <Route path="/stockdata" component={StockDataContainer} />
          <Route
            path="/marketplace"
            render={() => (
              <MarketplaceContainer user={this.props.currentUser} />
            )}
          />
          <Route
            path="/signup"
            render={() => <SignupForm handleSignUp={this.props.handleSignUp} />}
          />
          <Route
            path="/login"
            render={() => (
              <LoginForm handleLoginSubmit={this.props.handleLoginSubmit} />
            )}
          />
          <Route
            path="/account"
            render={() => (
              <Account
                user={this.props.currentUser}
                handleSell={this.props.handleSell}
                handleBuy={this.props.handleBuy}
                setUser={this.props.setUser}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <SignupForm
                user={this.props.currentUser}
                handleSignUp={this.handleEdit}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => <HomeContainer user={this.state.user} />}
            handleChange={this.handleChange}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(WholePage);
