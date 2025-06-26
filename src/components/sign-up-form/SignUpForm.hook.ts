"use client";
import { toast } from "@/hooks/use-toast";
import { useRegisterUser } from "@/hooks/useRegisterUser";
import { ERROR_MESSAGES } from "@/utills/validate-message";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
}

export const useSignUpForm = () => {
  const registerUserMutation = useRegisterUser();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEmpty = (val: string) => !val.trim();

  const isTooShort = (val: string, len: number) => val.trim().length < len;

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    const { firstName, lastName, email, password, confirmPassword, phone } =
      formData;

    if (isEmpty(firstName)) errors.firstName = ERROR_MESSAGES.firstNameRequired;
    else if (isTooShort(firstName, 2))
      errors.firstName = ERROR_MESSAGES.firstNameTooShort;

    if (isEmpty(lastName)) errors.lastName = ERROR_MESSAGES.lastNameRequired;
    else if (isTooShort(lastName, 2))
      errors.lastName = ERROR_MESSAGES.lastNameTooShort;

    if (isEmpty(email)) errors.email = ERROR_MESSAGES.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = ERROR_MESSAGES.emailInvalid;

    if (!password) errors.password = ERROR_MESSAGES.passwordRequired;
    else if (password.length < 8)
      errors.password = ERROR_MESSAGES.passwordTooShort;
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      errors.password = ERROR_MESSAGES.passwordWeak;
    }

    if (!confirmPassword)
      errors.confirmPassword = ERROR_MESSAGES.confirmPasswordRequired;
    else if (password !== confirmPassword) {
      errors.confirmPassword = ERROR_MESSAGES.confirmPasswordMismatch;
    }

    if (isEmpty(phone)) errors.phone = ERROR_MESSAGES.phoneRequired;
    else if (!/^\d{10,}$/.test(phone))
      errors.phone = ERROR_MESSAGES.phoneInvalid;

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsLoading(true);

    await registerUserMutation.mutateAsync(
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      },
      {
        onSuccess: () => {
          toast.success("Account created successfully!", {
            description: `Welcome ${formData.firstName}! Your account has been created.`,
            descriptionClassName: "!text-green-500",
          });

          resetForm();
          setIsLoading(false);
        },
        onError: (error) => {
          const message = ((error as AxiosError)?.response as AxiosResponse)
            ?.data?.message;
          setIsLoading(false);
          toast.error("Registration failed", {
            description: message || "Please try again later.",
            descriptionClassName: "!text-red-500",
          });
        },
      }
    );
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
    setErrors({});
  };

  return {
    handleInputChange,
    setShowPassword,
    setShowConfirmPassword,
    showConfirmPassword,
    formData,
    errors,
    showPassword,
    isLoading,
    handleSubmit,
  };
};
