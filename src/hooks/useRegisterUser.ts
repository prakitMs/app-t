import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
      firstName: string; // changed
      lastName: string; // changed
    }) =>
      axios
        .post("/api/register", {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
        })
        .then((res) => res.data),
  });
};
