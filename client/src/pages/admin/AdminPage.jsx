import { ProtectedLayout } from "../../layouts";
import { TabMenu } from "../../components/admin/index";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  return (
    <ProtectedLayout role={"admin"}>
      <TabMenu />
    </ProtectedLayout>
  );
};
