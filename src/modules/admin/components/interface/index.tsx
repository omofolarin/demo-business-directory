import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import BusinessIcon from "@material-ui/icons/Business";
import CategoryIcon from "@material-ui/icons/Category";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    },
    container: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      overflow: "hidden"
    },
    sidebarContainer: {
      display: "flex",
      flexDirection: "row",
      width: "12%",
      backgroundColor: "#322480",
      height: "100vh"
    },
    sidebarItems: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      height: "30vh",
      justifyContent: "center"
    },
    sidebarNav: {
      color: "#fff",
      textTransform: "capitalize",
      width: "100%"
    },
    main: {
      display: "flex",
      flexDirection: "row",
      width: "88%",
      backgroundColor: "#fff",
      height: "100vh",
      overflowY: "auto"
    },
    topBarContainer: {
      width: "100%",
      backgroundColor: "#F5F5F5",
      height: "5em"
    }
  })
);

export default function Interface(props: any): any {
  const { children } = props;
  const classes = useStyles();
  const topBar = <div className={classes.topBarContainer}></div>;

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div style={{ width: "100%" }}>
          {topBar}
          {children}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

const Sidebar = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.sidebarItems}>
        <div
          style={{
            width: "100%"
          }}
        >
          <Link to="/admin/manage/businesses">
            <Button
              className={classes.sidebarNav}
              startIcon={
                <IconButton
                  aria-label="business"
                  className={classes.button}
                  style={{ color: "#fff" }}
                >
                  <BusinessIcon />
                </IconButton>
              }
            >
              Businesses
            </Button>
          </Link>
        </div>
        <div style={{ width: "100%" }}>
          <Link to="/admin/manage/categories">
            <Button
              className={classes.sidebarNav}
              startIcon={
                <IconButton
                  aria-label="category"
                  className={classes.button}
                  style={{ color: "#fff" }}
                >
                  <CategoryIcon />
                </IconButton>
              }
            >
              Categories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
