import React from "react";
import Interface from "../../components/interface";
import { Button, Snackbar } from "@material-ui/core";
import BusinessForm from "../../components/business-form";
import useBusinessForm from "../../../../hooks/use-businessForm";
import useForm from "react-hook-form";
import functions from "../../../../functions";
import useLocalStorage from "../../../../hooks/use-localStorage";
import { IDefaultState } from "../../../../types/interfaces";
import { useHistory, useLocation } from "react-router";
import { fetchBusiness } from "../../../../functions/fetchs";

const defaultState = {
  isLoading: false,
  data: null,
  error: null,
  status: null
};

const useMount = (mount: any) => React.useEffect(mount, []);

export default function Update(props: any): any {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    setError,
    clearError
  } = useForm();
  const [updateBusiness, setUpdateBusiness] = React.useState<IDefaultState>(
    defaultState
  );
  const [singleBusiness, setSingleBusiness] = React.useState<any>(defaultState);

  const [isOpenMediaUploadModal, setMediaUploadModal] = React.useState(false);

  const businessProps = { register, setValue, setError, clearError };
  const { handleChange, dropzone, formValues } = useBusinessForm(businessProps);
  const [fromStorage, saveToStorage] = useLocalStorage("businessDirectory", {});
  const history = useHistory();
  const location = useLocation();

  useMount(() => {
    if (state.title) {
      fetchBusiness(setSingleBusiness, state.title, fromStorage);
    }
  });

  let error = null;
  const { state } = location;

  React.useEffect(() => {
    if (updateBusiness.status) {
      history.push("/admin/manage/businesses");
    }
  });

  if (updateBusiness.error) {
    const vertical = "bottom";
    const horizontal = "right";
    error = (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        key={`${vertical},${horizontal}`}
        open={updateBusiness.error ? true : false}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id">
            {typeof updateBusiness.error === "object"
              ? updateBusiness.error.e.message
              : "Cannot Update message, business name already exists"}
          </span>
        }
      />
    );
  }

  if (singleBusiness.error) {
    const vertical = "bottom";
    const horizontal = "right";
    error = (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        key={`${vertical},${horizontal}`}
        open={singleBusiness.error ? true : false}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id">
            {typeof singleBusiness.error === "object"
              ? singleBusiness.error.e.message
              : singleBusiness.error}
          </span>
        }
      />
    );
  }

  const onSubmit = (data: any) => {
    setUpdateBusiness({ ...updateBusiness, ...{ isLoading: true } });
    const Update = functions
      .business(fromStorage, saveToStorage)
      .onUpdate(data.name, data);
    if (Update) {
      setUpdateBusiness({
        ...updateBusiness,
        ...{ isLoading: false, status: true, error: false }
      });
    } else {
      if (typeof Update === "object") {
        setUpdateBusiness({
          ...updateBusiness,
          ...{ isLoading: false, status: false, error: Update }
        });
      } else {
        setUpdateBusiness({
          ...updateBusiness,
          ...{ isLoading: false, status: false, error: true }
        });
      }
    }
  };

  const onOpenMediaModal = () => setMediaUploadModal(true);
  const onCloseMediaModal = () => setMediaUploadModal(false);

  return (
    <Interface
      title="Update a Business Directory"
      actions={
        <Button variant="outlined" onClick={onOpenMediaModal}>
          Upload images
        </Button>
      }
    >
      {error}
      <BusinessForm
        {...{
          onSubmit,
          handleChange,
          handleSubmit,
          dropzone,
          formValues,
          errors,
          isOpenMediaUploadModal,
          onOpenMediaModal,
          onCloseMediaModal
        }}
      />
    </Interface>
  );
}
