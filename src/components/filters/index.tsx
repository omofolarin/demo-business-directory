import React from "react";
import { TextField } from "@material-ui/core";

const Filters = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "6em"
      }}
    >
      <TextField
        name="filter"
        label="Filter"
        margin="normal"
        variant="outlined"
        style={{ width: "31.33%", marginRight: "2%" }}
      />
      <TextField
        name="search"
        label="Search"
        margin="normal"
        variant="outlined"
        style={{ width: "31.33%" }}
      />
    </div>
  );
};

export default Filters;
