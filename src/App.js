import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import "./App.css";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";
 
class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={Shop} />
          <Route path={"/sign-in"} component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
