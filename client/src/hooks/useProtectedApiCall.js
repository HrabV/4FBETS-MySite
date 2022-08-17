import { useDispatch, useSelector } from "react-redux";

export const useProtectedApiCall = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return function (fn, data) {
    data.accessToken = accessToken;
    dispatch(fn(data));
  };
};
