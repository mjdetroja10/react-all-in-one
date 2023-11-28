import { FetchWrapper } from "Core/FetchWrapper/FetchWrapper";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api`;

const LOGIN_API_URL = `${BASE_URL}/login`;

export class AuthConnector {
  static async login(body) {
    return await FetchWrapper.post(LOGIN_API_URL, { body });
  }

  static dash = "dash";
}
