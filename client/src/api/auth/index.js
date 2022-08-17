import axios from "axios";
import { API_URL } from "../../config";

export const register = async ({ nickname, email, password }, thunk) => {
  try {
    const response = await axios.post(
      "/auth/register",
      { nickname, email, password },
      { baseURL: API_URL }
    );
    saveCredentialsToLocalStorage(response.data);
    return response.data;
  } catch (e) {
    thunk.rejectWithValue(e.response.data.message);
  }
};

export const login = async (credentials, thunk) => {
  try {
    const response = await axios.post("/auth/login", credentials, {
      baseURL: API_URL,
    });
    saveCredentialsToLocalStorage(response.data);
    return response.data;
  } catch (e) {
    thunk.rejectWithValue(e.response.data.message);
  }
};

const saveCredentialsToLocalStorage = (credentials) => {
  localStorage.setItem("accessToken", credentials.accessToken);
  localStorage.setItem(
    "user",
    JSON.stringify({
      nickname: credentials.nickname,
      email: credentials.email,
      role: credentials.role,
    })
  );
};
