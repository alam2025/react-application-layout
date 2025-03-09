import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { useSidebar } from "../contexts/SidebarContext";

// import { signOut } from 'firebase/auth';

export default function Sidebar() {
  const { isExpanded, toggleSidebar } = useSidebar();

  return (
    <aside
      className={clsx(
        "flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300",
        isExpanded ? "w-64" : "w-16"
      )}
    >
      <div className="h-16 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
        {isExpanded && (
          <h1 className="text-lg font-medium text-gray-900 line-clamp-1 dark:text-white flex-1">
            Business Manager
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isExpanded ? (
            <ChevronLeft className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-1">email</nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700"></div>
    </aside>
  );
}
