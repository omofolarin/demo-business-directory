import * as React from "react";
import {
  TextField,
  Button,
  Snackbar
} from "@material-ui/core";
import CategoriesInput from "../../../../components/categories-input";
import Media from "./media";
import MediaModal from "./media-modal";

const BusinessForm = (props: any) => {
  const {
    handleSubmit,
    onSubmit,
    dropzone,
    handleChange,
    formValues,
    errors,
    isOpenMediaUploadModal,
    onOpenMediaModal,
    onCloseMediaModal
  } = props;

  let showErrors = null;
  const [formErrors, setFormErrors] = React.useState<Record<string, any>>({});
  React.useEffect(() => {
    if (Object.values(errors).length > 0) {
      setFormErrors(errors);
    }
  }, [errors, setFormErrors]);

  if (Object.values(formErrors).length > 0) {
    showErrors = Object.values(errors).map((error: any, i: number) => {
      console.log(error);
      return (
        <Snackbar
          key={i.toString()}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={error ? true : false}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="message-id">
              {error.message === ""
                ? `${error.ref.name} is required`
                : "Cannot create message"}
            </span>
          }
        />
      );
    });
  }

  return (
    <React.Fragment>
      {showErrors}
      <MediaModal
        {...{
          isOpenMediaUploadModal,
          onOpenMediaModal,
          onCloseMediaModal,
          dropzone,
          images: formValues.images
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100vh",
            padding: "0 4% 0 4%",
            flexDirection: "column",
            overflowY: "scroll"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Media
              images={formValues.images}
              dropzone={dropzone}
              logo={formValues.logo}
            />
            <div
              style={{
                width: "65%",
                minHeight: "80vh",
                height: "90vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </div>
              <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
                <TextField
                  name="name"
                  label="Business name"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "43%", marginRight: "2%" }}
                  onChange={(e: any) => {
                    handleChange(e, "name");
                  }}
                  required={true}
                  error={errors.name ? true : false}
                  helperText={errors.name ? errors.name.message : ""}
                />
                <div
                  style={{
                    width: "43%",
                    marginRight: "2%",
                    paddingTop: "0.4em"
                  }}
                >
                  <CategoriesInput
                    input={{
                      onChange: (e: any) => {
                        handleChange(e, "categories");
                      },
                      name: "",
                      value: "",
                      required: true
                    }}
                    style={{ width: "43%", marginRight: "2%" }}
                  />
                </div>
                <TextField
                  name="description"
                  label="Description"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "43%", marginRight: "2%" }}
                  onChange={(e: any) => {
                    handleChange(e, "description");
                  }}
                  required={true}
                  error={errors.description ? true : false}
                  helperText={
                    errors.description ? errors.description.message : ""
                  }
                />
              </div>
              <div style={{ width: "100%" }}>
                <TextField
                  name="address"
                  label="Address"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "43%", marginRight: "2%" }}
                  onChange={(e: any) => {
                    handleChange(e, "address");
                  }}
                  required={true}
                  error={errors.address ? true : false}
                  helperText={errors.name ? errors.name.message : ""}
                />
                <TextField
                  name="phone"
                  label="Phone Number"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "43%", marginRight: "2%" }}
                  onChange={(e: any) => {
                    handleChange(e, "phone");
                  }}
                  required={true}
                  error={errors.phone ? true : false}
                  helperText={errors.phone ? errors.phone.message : ""}
                />
                <TextField
                  name="contactEmail"
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "43%", marginRight: "2%" }}
                  onChange={(e: any) => {
                    handleChange(e, "contactEmail");
                  }}
                  required={true}
                  error={errors.contactEmail ? true : false}
                  helperText={
                    errors.contactEmail ? errors.contactEmail.message : ""
                  }
                />

                <TextField
                  name="website"
                  label="Website"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "43%", marginRight: "2%" }}
                  onChange={(e: any) => {
                    handleChange(e, "websiteUrl");
                  }}
                  required={true}
                  error={errors.websiteUrl ? true : false}
                  helperText={
                    errors.websiteUrl ? errors.websiteUrl.message : ""
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default BusinessForm;
