import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Loader from "../components/common/Loader";
import history from './history';

const Ticket = lazy(() => import("../containers/Tickets/Ticket"));
const MultipleSelect = lazy(() => import("../containers/MultipleSelect/MultipleSelect"))
const PhoneComponent = lazy(() => import("../containers/PhoneComponent/PhoneComponent"))

const RouterComponent = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loader open={true} />}>
        <Switch>
          <Route exact path="/" component={Ticket} />
          <Route path="/tickets" component={Ticket} />
          <Route path="/multiple-select" component={MultipleSelect} />
          <Route path="/phone" component={PhoneComponent} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RouterComponent;
