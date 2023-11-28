import { AuthConnector } from "Core/connnectors/AuthConnectors";

export const LoginRequest = async (params) => {
  try {
    const response = await AuthConnector.login(params);

    if (response.status === 404)
      return {
        error: "Network Error",
      };

    return await response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};
