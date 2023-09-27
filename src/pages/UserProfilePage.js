import React from "react";
import UserProfile from "../features/user/components/UserProfile";
import Navbar from "../features/Navbar/Navbar";

function UserProfilePage() {
  return (
    <div>
      <Navbar Children={UserProfile} />
    </div>
  );
}

export default UserProfilePage;
