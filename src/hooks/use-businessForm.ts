import * as React from "react";
import { IBusiness } from "../types/schema";
import { useDropzone } from "react-dropzone";

interface IBusinessForm {
  register: Function;
  setValue: Function;
  setError: Function;
  clearError: Function;
  defaultValues?: IBusiness;
}

const useBusinessForm = (props: IBusinessForm) => {
  const { register, setValue, setError, clearError, defaultValues } = props;

  const [name, setName] = React.useState(
    defaultValues ? defaultValues.name : ""
  );
  const [categories, setCategories] = React.useState(
    defaultValues ? defaultValues.categories : []
  );
  const [description, setDescription] = React.useState(
    defaultValues ? defaultValues.description : ""
  );
  const [address, setAddress] = React.useState(
    defaultValues ? defaultValues.address : ""
  );
  const [contactEmail, setContactEmail] = React.useState(
    defaultValues ? defaultValues.contactEmail : ""
  );
  const [postalCode, setPostalCode] = React.useState(
    defaultValues ? defaultValues.postalCode : ""
  );
  const [phone, setPhone] = React.useState(
    defaultValues ? defaultValues.phone : ""
  );
  const [logo, setLogo] = React.useState(
    defaultValues ? defaultValues.logo : {}
  );

  const [images, setImages] = React.useState(
    defaultValues ? defaultValues.images : []
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setImages(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        ) as any
      );
      setValue(
        "images",
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        ) as any
      );

      //set first upload as logo
      setLogo(acceptedFiles[0]);
      setValue("logo", acceptedFiles[0]);
    }
  });

  const [websiteUrl, setWebsiteUrl] = React.useState(
    defaultValues ? defaultValues.websiteUrl : ""
  );
  const [listedAt, setListedAt] = React.useState(
    defaultValues ? defaultValues.listedAt : ""
  );
  const [updatedAt, setUpdatedAt] = React.useState(
    defaultValues ? defaultValues.updatedAt : ""
  );

  const formState = {
    name: { value: name, onChange: setName, required: true },
    categories: { value: categories, onChange: setCategories, required: true },
    description: {
      value: description,
      onChange: setDescription,
      required: true
    },
    address: { value: address, onChange: setAddress, required: true },
    contactEmail: {
      value: contactEmail,
      onChange: setContactEmail,
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address"
      }
    },
    postalCode: { value: postalCode, onChange: setPostalCode },
    phone: { value: phone, onChange: setPhone, required: true },
    logo: { value: logo, onChange: setLogo },
    images: { value: images, onChange: setImages, required: true },
    websiteUrl: {
      value: websiteUrl,
      onChange: setWebsiteUrl,
      required: false,
      pattern: {
        value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
        message: "Invalid website url"
      }
    },
    listedAt: { value: listedAt, onChange: setListedAt, required: false },
    updatedAt: { value: updatedAt, onChange: setUpdatedAt, required: false }
  };

  React.useEffect(() => {
    registerInputs(formState, register);
    // onChangeImages(images as any[]);
  }, [register, images, formState]);

  // const onChangeImages = (images: any[]) => {
  //   if (Array.isArray(logo)) {
  //     images.forEach(file => URL.revokeObjectURL(file.preview));
  //   }
  // };

  const registerInputs = (
    formState: Record<string, any>,
    register: Function
  ) => {
    Object.keys(formState).map((name: string) => {
      const isRequired = (formState as any)[name].required;
      const getPattern = formState[name].pattern
        ? { pattern: formState[name].pattern }
        : {};

      register({ name }, { required: isRequired, ...getPattern });
      return null;
    });
  };

  const validateInput = (
    name: string,
    value: any,
    setError: Function,
    clearError: Function,
    validatePattern: Record<string, any> | undefined
  ) => {
    if (validatePattern) {
      const regex = RegExp(validatePattern.value);

      if (!regex.test(value)) {
        setError(name, "input", validatePattern.message);
      } else {
        clearError(name);
      }
    }
  };

  const onChange = (e: any, stateName: string) => {
    const value = e && e.target ? e.target.value : e;
    Object.keys(formState).map((name: string) => {
      if (name === stateName) {
        const input = (formState as any)[name];
        const handleChange = input.onChange;
        const change = value;
        handleChange(change);
        setValue(name, change);
        validateInput(name, change, setError, clearError, input.pattern);
      }
      return null;
    });
  };

  const getFormValues = () => {
    const formValues: Record<string, any> = {};
    Object.keys(formState).map((key: string) => {
      formValues[key] = (formState as any)[key].value;
      return null;
    });

    return formValues;
  };

  const formValues = getFormValues();

  return {
    formValues,
    handleChange: onChange,
    dropzone: { getRootProps, getInputProps }
  };
};

export default useBusinessForm;
