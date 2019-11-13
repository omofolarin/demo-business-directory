import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button
} from "@material-ui/core";
import useForm from "react-hook-form";
import functions from "../../../../functions";
import useLocalStorage from "../../../../hooks/use-localStorage";
import { useHistory } from "react-router";

interface Props {}

const defaultState = {
  isLoading: false,
  data: null,
  error: null,
  status: null
};

interface IDefaultState {
  isLoading: boolean;
  data: null | Record<string, any>;
  error: null | boolean | string;
  status: null | boolean;
}
export default function Login(props: Props): any {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const [storageValues, saveToStorage] = useLocalStorage(
    "businessDirectory",
    {}
  );
  const [login, setLogin] = React.useState<IDefaultState>(defaultState);
  const onSubmit = (data: any) => {
    setLogin({ ...login, ...{ isLoading: true } });
    const save = functions.admin(storageValues, saveToStorage).onLogin(data);
    if (save) {
      setLogin({
        isLoading: false,
        data: save as any,
        error: false,
        status: true
      });
    } else {
      setLogin({ isLoading: false, data: null, error: true, status: false });
    }
  };
  React.useEffect(() => {
    redirectToAdmin();
  });

  const redirectToAdmin = () => {
    const { verifyToken } = functions.admin(storageValues, saveToStorage);
    if (storageValues.admin) {
      if (login.data || verifyToken(storageValues.admin.token)) {
        history.push("/admin/manage/business");
      }
    }
  };

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
        <Card style={{ minWidth: "80%", minHeight: "40vh" }}>
          <CardHeader title="Login" style={{ textAlign: "center" }} />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                error={errors.email ? true : false}
                name="email"
                label="Email"
                margin="normal"
                variant="outlined"
                style={{ width: "100%" }}
                inputRef={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                  }
                })}
                required={true}
                helperText={errors.email ? errors.email.message : ""}
              />
              <TextField
                name="password"
                label="Password"
                margin="normal"
                variant="outlined"
                style={{ width: "100%" }}
                inputRef={register}
                required={true}
                type="password"
                helperText={errors.password ? errors.password.message : ""}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "100%", height: "3.5em", boxShadow: "none" }}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
