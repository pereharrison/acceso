import {
  BookAIcon,
  Calendar,
  LayoutDashboard,
  MessageCircle,
  BellDot,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import Image from "../../assets/image.jpg";

const links = [
  {
    name: "Dashboard",
    link: "/",
    icon: <LayoutDashboard />,
    isColor: false,
  },

  {
    name: "Message",
    link: "/message",
    icon: <MessageCircle />,
    isColor: false,
  },

  {
    name: "Calender",
    link: "/calender",
    icon: <Calendar />,
    isColor: false,
  },
  {
    name: "Booking",
    link: "/booking",
    icon: <BookAIcon />,
    isColor: false,
  },
];

const DashboardLayout = () => {
  return (
    <div className="h-screen  w-full">
      <div className="bg-[#006766] sticky top-0 -z-10 w-full px-9 h-49 mb-20 py-6 flex justify-evenly items-center gap-8">
        {/* Logo - orange circle */}
        <div className=" rounded-full w-16 h-16 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-lg">Acceso</span>
        </div>

        {/* Nav links */}
        <ul className="flex items-center gap-8 text-white">
          <li>
            <Link to="/" className="font-bold">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/booking" className="hover:opacity-75 font-light">
              Booking
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:opacity-75 font-light">
              Total Balance
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:opacity-75 font-light">
              Reporting
            </Link>
          </li>
        </ul>

        {/* Search bar - grows to fill space */}
        <div className="w-100 mx-4">
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-white px-5 py-2.5 rounded-full text-gray-500 text-sm outline-none"
          />
        </div>

        {/* Bell + Avatar */}
        <div className="flex items-center gap-4 text-white shrink-0">
          <BellDot className="w-5 h-5 cursor-pointer" />
          <img
            src={Image}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5 h-145 absolute top-30 z-40 w-full">
        <div className="col-span-1 flex flex-col h-165 bg-[#D3E8EA] ml-10 p-5 rounded-2xl">
          <ul className="grow flex flex-col gap-1">
            {links.map((nav) => (
              <li key={nav.name}>
                <Link
                  to={nav.link}
                  className={`${nav.isColor && "text-pink-400"} flex hover:bg-gray-100 gap-2 p-2 rounded-sm text-center`}
                >
                  {nav.icon} {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link>Sign Out</Link>
        </div>

        <div className="col-span-4 mr-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
