import React from "react";
import { Typography } from "@material-ui/core";
import theme from "../../../../theme";
import useStyles from "./styles";
import Sidebar from "./sidebar";

interface Props {}

export default function Interface(props: any): any {
  const { title, actions } = props;
  const { children } = props;
  const classes = useStyles(theme);
  const topBar = (
    <div className={classes.topBarContainer}>
      {title && !actions && (
        <Typography
          variant="h1"
          style={{ fontSize: "1.2rem", textAlign: "center" }}
        >
          {title}
        </Typography>
      )}
      {title && actions && (
        <React.Fragment>
          <div style={{ width: "85%" }}>
            <Typography
              variant="h1"
              style={{ fontSize: "1.2rem", textAlign: "center" }}
            >
              {title}
            </Typography>
          </div>
          <div style={{ width: "15%" }}>{actions}</div>
        </React.Fragment>
      )}
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div style={{ width: "100%" }}>
          {topBar}
          <div style={{ height: "90vh", overflowY: "scroll" }}>{children}</div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
