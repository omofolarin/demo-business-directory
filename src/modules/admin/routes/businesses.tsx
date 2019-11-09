import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListBusinesses from "../pages/businesses/index";
import CreateBusiness from "../pages/businesses/create";
import UpdateBusiness from "../pages/businesses/update";
import ViewBusiness from "../pages/businesses/view";

const BusinessesRoutes = (props: any) => {
  const { path, from } = props;
  return (
    <Route path={`${path}`}>
      <Switch>
        <Route path={`${path}`} exact>
          <Redirect from={`${from}`} to={`${path}`} />
          <ListBusinesses />
        </Route>

        <Route path={`${path}/create`}>
          <CreateBusiness />
        </Route>

        <Switch>
          <Route path={`${path}/:title/update`} exact>
            <UpdateBusiness />
          </Route>

          <Route path={`${path}/:title`}>
            <ViewBusiness />
          </Route>
        </Switch>
      </Switch>
    </Route>
  );
};

export default BusinessesRoutes;
