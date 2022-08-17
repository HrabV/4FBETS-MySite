import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewsEditForm } from "./components/admin/NewsEditForm.jsx";
import { NewsContainer } from "./components/newspage/NewsContainer.jsx";
import { useAuth } from "./hooks/useAuth.js";
import { setUser, setToken } from "./reducers/authSlice.js";
import {
  AdminPage,
  IndexPage,
  LoginPage,
  ProfilePage,
  RegistrationPage,
  NewsPage,
} from "./pages";

export default function App() {
  const [user, token] = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && token) {
      dispatch(setUser(user));
      dispatch(setToken(token));
    }
  }, [user, token, dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<IndexPage />} />
          <Route path={"/profile"} element={<ProfilePage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/registration"} element={<RegistrationPage />} />
          <Route path={"/admin"} element={<AdminPage />} />
          <Route
            path={"/admin/editnews/:newsId"}
            element={<NewsEditForm></NewsEditForm>}
          ></Route>
          <Route path={"/news"} element={<NewsPage />} />
          <Route path={"/news/:newsId"} element={<NewsContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
