import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./home/HomePage";
import Error404Page from "../Components/404/Error404Page";
import SearchPage from "./search/SearchPage";
import DetailsPage from "./details/DetailsPage";
import AddProperty from "./addProperty/AddProperty";



class RoutePagesComponent extends Component {
  
  
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }



  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/property-search" component={SearchPage} />
        <Route exact path="/details/:id" component={DetailsPage} />
        <Route exact path="/add" component={AddProperty} />
  
        <Route component={<Error404Page/>} />
      </Switch>
    );
  }
}

RoutePagesComponent.propTypes = {};

export default withRouter(RoutePagesComponent);
