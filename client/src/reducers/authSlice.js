import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../api/auth";

export const signupUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => await register(credentials, thunkAPI)
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => await login(credentials, thunkAPI)
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.status = "ok";
      state.token = action.payload.accessToken;
      state.user = {
        nickname: action.payload.nickname,
        email: action.payload.email,
        role: action.payload.role,
      };
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "ok";
      state.token = action.payload.accessToken;
      state.user = {
        nickname: action.payload.nickname,
        email: action.payload.email,
        role: action.payload.role,
      };
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = "failded";
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
export const { setStatus, setUser, setToken, logout } = authSlice.actions;
