import React from "react";
import Interface from "../../components/interface";
import { TextField, Button, Typography } from "@material-ui/core";
import CategoriesInput from "../../../../components/categories-input";
import useBusinessForm from "../../../../hooks/use-businessForm";
import useForm from "react-hook-form";

export default function Create({  }: any): any {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    setError,
    clearError
  } = useForm();
  const { handleChange } = useBusinessForm(
    register,
    setValue,
    setError,
    clearError
  );
  const onSubmit = (data: any) => console.log("submitted", data);

  return (
    <Interface
      title="Create a Business Directory"
      actions={<Button variant="outlined">Upload images</Button>}
    >
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
            <Media />
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
    </Interface>
  );
}

const Media = () => {
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
          ></div>
          <Button
            style={{ marginTop: "1em", width: "10em" }}
            variant="outlined"
          >
            Upload Logo
          </Button>
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
          <div
            style={{
              width: "28%",
              marginRight: "2%",
              border: "1px solid #cccccc",
              height: "4em",
              marginBottom: "4%"
            }}
          ></div>
          <div
            style={{
              width: "28%",
              marginRight: "2%",
              border: "1px solid #cccccc",
              height: "4em",
              marginBottom: "4%"
            }}
          ></div>
          <div
            style={{
              width: "28%",
              marginRight: "2%",
              border: "1px solid #cccccc",
              height: "4em",
              marginBottom: "4%"
            }}
          ></div>
          <div
            style={{
              width: "28%",
              marginRight: "2%",
              border: "1px solid #cccccc",
              height: "4em",
              marginBottom: "4%"
            }}
          ></div>
          <div
            style={{
              width: "28%",
              marginRight: "2%",
              border: "1px solid #cccccc",
              height: "4em",
              marginBottom: "4%"
            }}
          ></div>
          <div
            style={{
              width: "28%",
              marginRight: "2%",
              border: "1px solid #cccccc",
              height: "4em",
              marginBottom: "4%"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
