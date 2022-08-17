import { Box, Center, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { Nav, Footer } from "../components";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../reducers/authSlice";
import { useState } from "react";
import { MainLayout } from ".";

export const ProtectedLayout = ({ children, role }) => {
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !token && user?.role !== role) {
      navigate("/login");
    }
  }, [user, token, role, navigate]);

  return <MainLayout>{children}</MainLayout>;
};
