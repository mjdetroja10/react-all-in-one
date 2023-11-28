import { useMutation } from "react-query";
import { LoginRequest } from "../../Infrastructure/requests/LoginRequest";

export const useLogin = () =>
  useMutation(async (params) => LoginRequest(params));
