import React from "react";
import { TextField } from "@material-ui/core";
import CategoriesInput from "../categories-input";

const Filters = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "6em"
      }}
    >
      <div
        style={{
          width: "61.33%",
          marginRight: "2%",
          marginTop: "1%",
          zIndex: 5,
          backgroundColor: "#fff"
        }}
      >
        <CategoriesInput input={{ onChange: () => {}, name: "", value: "" }} />
      </div>

      <TextField
        name="search"
        label="Search"
        margin="normal"
        variant="outlined"
        style={{ width: "34.33%", marginTop: "1.7%", height: "3em" }}
      />
    </div>
  );
};

export default Filters;
