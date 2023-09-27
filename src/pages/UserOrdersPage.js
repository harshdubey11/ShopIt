import React from "react";

import Navbar from "../features/Navbar/Navbar";
import UserOrders from "../features/user/components/UserOrders";

function UserOrdersPage() {
  return (
    <div>
      <Navbar Children={UserOrders}/>
      
    </div>
  );
}

export default UserOrdersPage;
