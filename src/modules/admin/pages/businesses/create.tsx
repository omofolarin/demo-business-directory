import React from "react";
import Interface from "../../components/interface";
import { Button, Typography, Modal } from "@material-ui/core";
import BusinessForm from "../../components/buiness-form";
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
  const businessProps = { register, setValue, setError, clearError };
  const { handleChange, dropzone, formValues } = useBusinessForm(businessProps);
  const onSubmit = (data: any) => console.log("submitted", data);
  const [isOpenMediaUploadModal, setMediaUploadModal] = React.useState(false);
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
