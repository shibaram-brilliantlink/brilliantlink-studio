"use client";
import { useState } from "react";
interface data {
  fullname: string;
  email: string;
  message: string;
}
export default function useFormValidate(callback: any) {
  const [data, setData] = useState({ fullname: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(event: any) {
    if (event) event.preventDefault();
    setErrors(validate(data)); //replacing old error object evrytime
    setIsSubmitted(true);

    console.log(isSubmitted);
  }
  function handleChange(event: any) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  return {
    data,
    errors,
    handleSubmit,
    handleChange,
  };
}

function validate(formdata: data) {
  let errors: data = { fullname: "", email: "", message: "" };

  //Validating fullname
  if (!formdata.fullname) {
    errors.fullname = "Fullname is required";
  } else if (formdata.fullname.length < 3 && formdata.fullname.length > 32) {
    errors.fullname = "Name must be 3-32 charactes long";
  }

  //Validating email id
  if (!formdata.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Za-z0-9+-._]+@[A-Za-z0-9+-._]+$/.test(formdata.email)) {
    errors.email = "Please enter valid email";
  }

  //Validating

  return errors;
}
