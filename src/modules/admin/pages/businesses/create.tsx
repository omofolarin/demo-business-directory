import React from "react";
import Interface from "../../components/interface";
import { Button, Snackbar } from "@material-ui/core";
import BusinessForm from "../../components/business-form";
import useBusinessForm from "../../../../hooks/use-businessForm";
import useForm from "react-hook-form";
import functions from "../../../../functions";
import useLocalStorage from "../../../../hooks/use-localStorage";
import { IDefaultState } from "../../../../types/interfaces";
import { useHistory } from "react-router";

const defaultState = {
  isLoading: false,
  data: null,
  error: null,
  status: null
};

export default function Create(props: any): any {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    setError,
    clearError
  } = useForm();
  const [createBusiness, setCreateBusiness] = React.useState<IDefaultState>(
    defaultState
  );
  const [isOpenMediaUploadModal, setMediaUploadModal] = React.useState(false);

  const businessProps = { register, setValue, setError, clearError };
  const { handleChange, dropzone, formValues } = useBusinessForm(businessProps);
  const [fromStorage, saveToStorage] = useLocalStorage("businessDirectory", {});
  const history = useHistory();
  let error = null;

  React.useEffect(() => {
    if (createBusiness.status) {
      history.push("/admin/manage/businesses");
    }
  });

  if (createBusiness.error) {
    const vertical = "bottom";
    const horizontal = "right";
    error = (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        key={`${vertical},${horizontal}`}
        open={createBusiness.error ? true : false}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id">
            {typeof createBusiness.error === "object"
              ? createBusiness.error.e.message
              : "Cannot create message, business name already exists"}
          </span>
        }
      />
    );
  }

  const onSubmit = (data: any) => {
    setCreateBusiness({ ...createBusiness, ...{ isLoading: true } });
    const create = functions
      .business(fromStorage, saveToStorage)
      .onCreate(data);
    console.log(create, "error");
    if (create) {
      setCreateBusiness({
        ...createBusiness,
        ...{ isLoading: false, status: true, error: false }
      });
    } else {
      if (typeof create === "object") {
        setCreateBusiness({
          ...createBusiness,
          ...{ isLoading: false, status: false, error: create }
        });
      } else {
        setCreateBusiness({
          ...createBusiness,
          ...{ isLoading: false, status: false, error: true }
        });
      }
    }
  };

  const onOpenMediaModal = () => setMediaUploadModal(true);
  const onCloseMediaModal = () => setMediaUploadModal(false);

  return (
    <Interface
      title="Create a Business Directory"
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
