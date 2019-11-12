import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import Interface from "../../components/interface";
import { useHistory, useLocation } from "react-router";
import BusinessCard from "../../../../components/business-card";
import Filters from "../../../../components/filters";
import { fetchBusinesses, fetchCategories } from "../../../../functions/fetchs";
import useLocalStorage from "../../../../hooks/use-localStorage";

interface Props {}

const defaultState = {
  isLoading: false,
  data: null,
  error: null,
  status: null
};

export default function ListBusinesses({  }: Props): any {
  const [listBusiness, setBusinesses] = React.useState<Record<string, any>>(
    defaultState
  );
  const [listCategories, setCategories] = React.useState<Record<string, any>>(
    defaultState
  );
  const [storedValue] = useLocalStorage("businessDirectory", {});
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    fetchBusinesses(listBusiness, storedValue, setBusinesses);
    fetchCategories(listCategories, storedValue, setCategories);
  }, []);

  const onCreateRoute = () => {
    history.push(`${location.pathname}/create`);
  };

  const onEditRoute = (title: string) => {
    const slugified = title;
    history.push(`${location.pathname}/${slugified}/update`);
  };

  const onViewRoute = (title: string) => {
    const slugified = title;
    history.push(`${location.pathname}/${slugified}`);
  };

  const onDelete = (title: string) => {};

  const cardRouteActions = {
    onEditRoute,
    onViewRoute,
    onDelete,
    mode: "manage"
  };

  const businesses = listBusiness.data
    ? listBusiness.data.map((business: any) => ({
        ...business,
        ...cardRouteActions
      }))
    : [];

  return (
    <React.Fragment>
      <Interface
        title="Manage Business Directories"
        actions={
          <Button variant="outlined" color="primary" onClick={onCreateRoute}>
            Add a Business
          </Button>
        }
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "inherit",
            padding: "0 4% 0 4%",
            flexDirection: "column"
          }}
        >
          <Filters />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              marginTop: "2em",
              height: "60vh"
            }}
          >
            {listBusiness.isLoading && (
              <div
                style={{
                  width: "20%",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                {" "}
                <CircularProgress />{" "}
              </div>
            )}
            {businesses.map((item: any, i: number) => (
              <BusinessCard {...item} key={i.toString()} />
            ))}
          </div>
        </div>
      </Interface>
    </React.Fragment>
  );
}
