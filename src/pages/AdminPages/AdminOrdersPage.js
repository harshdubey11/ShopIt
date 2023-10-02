import React from "react";
import AdminOrders from "../../features/admin/AdminOrders";
import Navbar from "../../features/Navbar/Navbar";

function AdminOrdersPage() {
  return <Navbar Children={AdminOrders} />;
}

export default AdminOrdersPage;
