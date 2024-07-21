import React from 'react'
import { redirect } from 'next/navigation'


function AdminPage() {
  return redirect("/admin/blogs");
}

export default AdminPage