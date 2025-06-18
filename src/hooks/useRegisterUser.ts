import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      phone: string;
    }) =>
      axios
        .post("/api/register", {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
        })
        .then((res) => res.data),
  });
};
