"use client";
import { useState, useEffect } from "react";
import { formData, formErrors } from "../types";

export default function useFormValidate<T>(callback: () => T) {
  // Generic T allows callback to return any type
  const [data, setData] = useState<formData>({
    fullname: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<formErrors>>({}); //Allowing errors to be optional - initially

  useEffect(() => {
    //If there is no errors , callback()
    if (isSubmitted && Object.keys(errors).length === 0) {
      callback();
    }
  }, [errors, callback, isSubmitted]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);
    setIsSubmitted(true);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  return {
    data,
    errors,
    handleSubmit,
    handleChange,
  };
}

function validate(formData: formData): Partial<formErrors> {
  //Partial<formErrors> ensures that only invalid fileds are populated in errors obj & leaving others undefined
  const errors: Partial<formErrors> = {};

  //Validating fullname
  if (!formData.fullname) {
    errors.fullname = "Fullname is required";
  } else if (formData.fullname.length < 3 || formData.fullname.length > 32) {
    errors.fullname = "Name must be 3 to 32 characters long";
  }

  //Validating email id
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Za-z0-9+-._]+@[A-Za-z0-9+-._]+$/.test(formData.email)) {
    errors.email = "Please enter valid email";
  }

  //Validating message
  if (!formData.message) {
    errors.message = "Message is required";
  }

  return errors;
}
