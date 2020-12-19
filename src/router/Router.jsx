import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Loader from "../components/common/Loader";
import history from './history';

const Ticket = lazy(() => import("../containers/Ticket"));
const MultipleSelect = lazy(() => import("../containers/MultipleSelect"))
const PhoneComponent = lazy(() => import("../containers/PhoneComponent"))

const RouterComponent = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loader open={true} />}>
        <Switch>
          <Route exact path="/" component={Ticket} />
          <Route exact path="/tickets" component={Ticket} />
          <Route exact path="/multiple-select" component={MultipleSelect} />
          <Route exact path="/phone" component={PhoneComponent} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RouterComponent;
