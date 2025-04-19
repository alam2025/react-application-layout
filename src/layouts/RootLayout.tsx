import { Outlet } from "react-router-dom";

import { SidebarProvider } from "../contexts/SidebarContext";
import Sidebar from "../components/Sidebar";
import TopNav from "./TopNav";

const RootLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-[#F4F5FA] dark:bg-dark transition-colors">
        <Sidebar />
        <main className="flex-1 overflow-y-auto ">
          <TopNav />
          <div className="p-5">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default RootLayout;
