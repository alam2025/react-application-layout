import { Search } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { useSidebar } from "../contexts/SidebarContext";
import { logOut } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Dropdown, MenuProps } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const TopNav = () => {
  const { isExpanded } = useSidebar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  // avatar profile dropdown items
  const dropitems: MenuProps["items"] = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },

    {
      key: "2",
      label: (
        <Link to="/profile" className=" flex items-center gap-2">
          <UserOutlined />
          Profile
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <button onClick={logout} className=" flex items-center gap-2">
          <LogoutOutlined />
          Logout
        </button>
      ),
      danger: true,
    },
  ];

  return (
    <header className="flex justify-between items-center px-8  h-16 ">
      <div className="w-96 relative ">
        <input
          type="text"
          className="w-full bg-transparent "
          style={{ paddingLeft: "30px" }}
          placeholder="Search"
        />
        <Search className="absolute top-1/2 left-1 -translate-y-1/2 text-light" />
      </div>

      <div className="flex  ">
        <ThemeToggle isExpanded={isExpanded} />

        <div>
          <Dropdown menu={{ items: dropitems }} className="cursor-pointer ">
            <Avatar
              size="large"
              icon={<UserOutlined />}
              className="bg-primaryPurple"
            />
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
