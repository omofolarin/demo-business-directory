import React from "react";
// import {
//   Card,
//   TextField,
//   CardContent,
//   CardMedia,
//   Typography,
//   IconButton,
//   Tooltip,
//   Button
// } from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from "@material-ui/icons/Edit";
// import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Interface from "../../components/interface";
// import { useHistory, useLocation } from "react-router";

export default function View({  }: any): any {
  return (
    <Interface title="View a Business Directory">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "inherit",
          padding: "0 4% 0 4%",
          flexDirection: "column"
        }}
      >
        <h1>hello world</h1>
      </div>
    </Interface>
  );
}
