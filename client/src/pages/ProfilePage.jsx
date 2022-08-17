import { UserCard } from "../components/user";
import { ProtectedLayout } from "../layouts";

export const ProfilePage = () => {
  return (
    <ProtectedLayout role={"user"}>
      <UserCard></UserCard>
    </ProtectedLayout>
  );
};
