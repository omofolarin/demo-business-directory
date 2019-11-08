import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button
} from "@material-ui/core";

interface Props {}

export default function Login(props: Props): any {
  return (
    <Container maxWidth="sm">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh"
        }}
      >
        <Card style={{ minWidth: "80%", height: "40vh" }}>
          <CardHeader title="Login" style={{ textAlign: "center" }} />
          <CardContent>
            <TextField
              name="email"
              label="Email"
              margin="normal"
              variant="outlined"
              style={{ width: "100%" }}
            />
            <TextField
              name="password"
              label="Password"
              margin="normal"
              variant="outlined"
              style={{ width: "100%" }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ width: "100%", height: "3.5em", boxShadow: "none" }}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
