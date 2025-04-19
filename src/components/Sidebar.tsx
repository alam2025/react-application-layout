import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { useSidebar } from "../contexts/SidebarContext";
import { RiHomeSmileLine } from "react-icons/ri";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// Define types
type MenuItem = {
  id: string;
  label: string;
  icon: JSX.Element;
  subItems?: { id: string; label: string; sublink: string }[];
  link?: string;
  isSub: boolean;
};

type OpenMenusState = {
  [key: string]: boolean;
};

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <RiHomeSmileLine size={20} />,
    link: "/dashboard",
    isSub: false,
  },
  {
    id: "devices",
    label: "Devices",
    icon: <TbDeviceDesktopAnalytics size={20} />,
    subItems: [
      { id: "olt", label: "OLT", sublink: "/olt-list" },
      { id: "microtrick", label: "MICROTRICK", sublink: "/microtrick-list" },
    ],
    isSub: true,
  },

  // Add more menu items here
];

export default function Sidebar() {
  const { isExpanded, toggleSidebar } = useSidebar();
  const [openMenus, setOpenMenus] = useState<OpenMenusState>({});
  const location = useLocation();

  const toggleMenu = (id: string) => {
    setOpenMenus((prev) => ({
      // ...prev,
      [id]: !prev[id],
    }));
  };
  console.log(location);
  return (
    <aside
      className={clsx(
        "flex flex-col   transition-all duration-300",
        isExpanded ? "w-64" : "w-16"
      )}
    >
      <div className="h-16 flex items-center px-4 ">
        {isExpanded && (
          <h1 className="text-lg font-medium text-gray-900 line-clamp-1 dark:text-white flex-1">
            OLT CARE
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

      <nav className="flex-1  space-y-1">
        <ul>
          {menuItems.map((item: MenuItem) =>
            item.isSub ? (
              <li key={item.id} className=" relative">
                <div
                  className="flex justify-between items-center py-2 px-3 rounded-r-full hover:bg-hoverMenu dark:hover:bg-hoverMenudark cursor-pointer"
                  onClick={() => toggleMenu(item.id)}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {isExpanded && item.label}
                  </div>
                  <FiChevronRight
                    className={`transition-transform duration-300 ${
                      openMenus[item.id] ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {/* Submenu */}
                <div
                  className={` overflow-hidden transition-all duration-300 ease-in-out ${
                    openMenus[item.id] && isExpanded
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="flex flex-col gap-2 text-sm">
                    {item?.subItems?.map((sub, index) => (
                      <li key={index}>
                        <Link
                          className={`flex transition duration-300 py-2 ${
                            location.pathname == sub.sublink
                              ? "bg-gradient-to-r from-[#AB86FE] to-[#8C57FF] text-white"
                              : ""
                          }  px-3 pl-4 rounded-r-full hover:bg-hoverMenu dark:hover:bg-hoverMenudark items-center gap-3`}
                          to={sub?.sublink}
                        >
                          <p className="w-3 h-3 border-gray-500 dark:border-gray-200  rounded-full border"></p>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={` overflow-hidden absolute left-[100%] rounded-md shadow-lg transition-all bg-white dark:bg-gray-600 duration-300 ease-in-out ${
                    openMenus[item.id] && !isExpanded
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  } `}
                >
                  <ul className="flex flex-col gap-2 text-sm">
                    {item?.subItems?.map((sub, index) => (
                      <li key={index}>
                        <Link
                          className={`flex transition duration-300 py-2 ${
                            location.pathname == sub.sublink
                              ? "bg-gradient-to-r from-[#AB86FE] to-[#8C57FF] text-white"
                              : ""
                          }  px-3 pl-4 rounded-full hover:bg-hoverMenu dark:hover:bg-hoverMenudark items-center gap-3`}
                          to={sub?.sublink}
                        >
                          <p className="w-3 h-3 border-gray-500 dark:border-gray-200  rounded-full border"></p>
                          {sub.label}s
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.id}>
                <Link
                  className={`flex py-2 px-3 ${
                    location.pathname == item.link
                      ? "bg-gradient-to-r from-[#AB86FE] to-[#8C57FF] text-white "
                      : ""
                  } rounded-r-full hover:bg-hoverMenu dark:hover:bg-hoverMenudark transition duration-300 items-center gap-2`}
                  to={item?.link ?? "#"}
                >
                  {item.icon}
                  {isExpanded && item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700"></div>
    </aside>
  );
}
