import { LogOut, Search } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { useSidebar } from "../contexts/SidebarContext";

const TopNav = () => {
  const { isExpanded } = useSidebar();
  return (
    <header className="flex justify-between items-center px-8  h-16 border-b border-neutral-300/30">
      <div className="w-96 relative ">
        <input type="text" className="w-full" placeholder="Search" />
        <Search className="absolute top-1/2 right-2 -translate-y-1/2 text-light" />
      </div>

      <div className="flex  ">
        <ThemeToggle isExpanded={isExpanded} />
        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
