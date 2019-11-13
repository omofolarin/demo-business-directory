import * as React from "react";
import { Typography, Modal } from "@material-ui/core";

const MediaModal = (props: any) => {
  const { isOpenMediaUploadModal, onCloseMediaModal, dropzone, images } = props;
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpenMediaUploadModal}
      onClose={onCloseMediaModal}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#fff",
          width: "80%",
          height: "70vh",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5%"
        }}
      >
        <div style={{ width: "45%", height: "inherit" }}>
          <div
            {...dropzone.getRootProps({ className: "dropzone" })}
            style={{
              display: "flex",
              margin: "5%",
              width: "70%",
              height: "30em",
              border: "1px solid #ccc",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <input {...dropzone.getInputProps()} />
            <Typography variant="h4">Drop Images</Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "60%",
            height: "inherit",

            padding: "15% 5% 15% 5%"
          }}
        >
          {(images || []).map((image: Record<string, any>, i: number) => (
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
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default MediaModal;
