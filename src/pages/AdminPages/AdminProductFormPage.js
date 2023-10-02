import React from "react";
import Navbar from "../../features/Navbar/Navbar";

import ProductForm from "../../features/admin/ProductForm";
function AdminProductFormPage() {
  return <Navbar Children={ProductForm} />;
}

export default AdminProductFormPage;
