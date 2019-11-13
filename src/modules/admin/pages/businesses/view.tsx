import React from "react";
import Interface from "../../components/interface";

export default function View(props: any): any {
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
