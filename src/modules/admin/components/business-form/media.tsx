import * as React from "react";
import { Typography } from "@material-ui/core";

const Media = (props: any) => {
  const { images, logo } = props;
  const thumbnailImages = Array.isArray(images)
    ? images.map((image: Record<string, any>, i: number) => (
        <div
          key={i.toString()}
          style={{
            width: "28%",
            marginRight: "2%",
            border: "1px solid #cccccc",
            height: "4em",
            marginBottom: "4%"
          }}
        >
          <img src={image.preview} alt="upload" style={{ width: "100%" }} />
        </div>
      ))
    : null;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "35%",
        minHeight: "80vh",
        height: "90vh"
      }}
    >
      <div
        style={{
          marginTop: "2em",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          height: "18em",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              width: "8em",
              height: "8em",
              border: "1px solid #cccccc",
              borderRadius: "50%"
            }}
          >
            {logo.preview && (
              <img src={logo.preview} alt="upload" style={{ width: "100%" }} />
            )}
          </div>
          {/* 
            <Button
              style={{ marginTop: "1em", width: "10em" }}
              variant="outlined"
            >
              Upload Logo
            </Button> */}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "5em"
        }}
      >
        <Typography variant="h5" style={{ textAlign: "center", width: "100%" }}>
          Uploads
        </Typography>
        <div
          style={{
            width: "100%",
            flexWrap: "wrap",
            display: "flex",
            marginTop: "2em"
          }}
        >
          {thumbnailImages}
        </div>
      </div>
    </div>
  );
};

export default Media;
