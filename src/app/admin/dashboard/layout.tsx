import Sidebar from "../../../components/dashboard/sidebar";
import React from "react";

// app/dashboard/layout.tsx

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
