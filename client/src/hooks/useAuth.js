import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../reducers/authSlice";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [state, setState] = useState({ user, token });

  useEffect(() => {
    if (!state.user || !state.token) {
      const localUser = JSON.parse(localStorage.getItem("user"));
      const localToken = localStorage.getItem("accessToken");
      if (localUser && localToken) {
        setState({ user: localUser, token: localToken });
      }
    }
  }, [state]);
  return [state.user, state.token];
};
