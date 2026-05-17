import logo from "../assets/Logo.png";
import { RiArrowDownSFill } from "@remixicon/react";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-white">
        <nav className="flex justify-between items-center-safe p-5 shadow-sm">
          <img src={logo} alt="logo" width={120} className="cursor-pointer" />
          <div className="list hidden lg:flex items-center-safe gap-7 font-medium text-[14px] px-5">
            <div className="flex cursor-pointe">
              <p>Internships</p>
              <RiArrowDownSFill />
            </div>
            <div className="flex cursor-pointer">
              <p>
                Courses
                <span className="bg-[#ff8c00] text-white px-3 py-1 rounded-md">
                  OFFER
                </span>
              </p>
              <RiArrowDownSFill />
            </div>
            <div className="flex cursor-pointer">
              <p>Jobs</p>
              <RiArrowDownSFill />
            </div>
            <p className="cursor-pointer">IS PRO</p>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/sf-ultralight/50/1A1A1A/sms.png"
              alt="sms"
              className="cursor-pointer"
            />
            <div className="flex cursor-pointer">
              <p className="rounded-full px-2 py-1 text-xs border">V</p>
              <RiArrowDownSFill />
            </div>
          </div>
          {/* ---hamburger menu------ */}
          <div className="flex lg:hidden cursor-pointer">
            <p className="rounded-full px-2 py-1 text-xs border">V</p>
            <RiArrowDownSFill />
          </div>
        </nav>
      </div>
    </>
  );
}
