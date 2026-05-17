import office from "../assets/office.png";
import {
  RiIssuesReopenLine,
  RiMapPinLine,
  RiCashLine,
  RiCalendarLine,
  RiProfileLine,
} from "@remixicon/react";

export default function Cards({ data }) {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-between gap-5 p-10 border border-transparent rounded-2xl bg-white shadow-md cursor-pointer hover:scale-102 duration-300 ease-linear static"
        >
          <div className="w-50">
            <h1 className="font-semibold text-sm lg:text-xl">
              {item.title}({item.profile_name})
            </h1>
            <p className="text-[#8a8a8a] text-sm">{item.company_name}</p>
            <div className="grid lg:flex gap-2 lg:gap-5 my-2">
              <span className="flex items-center-safe gap-2 max-w-fit text-xs lg:text-sm">
                <RiMapPinLine size={15} />{" "}
                {item.location_names.length > 0
                  ? item.location_names
                  : "Work from Home"}
              </span>
              <span className="flex items-center-safe gap-2 max-w-fit text-xs xl:text-sm">
                <RiCashLine size={15} />
                {item.stipend.salary}
              </span>
              <span className="flex items-center-safe gap-2 max-w-fit text-sm">
                <RiCalendarLine size={15} /> {item.duration}
              </span>
            </div>
            <div className="flex items-center-safe gap-2 text-xs lg:text-sm">
              <RiProfileLine size={15} />
              <p className="my-2">{item.url}</p>
            </div>
            <p className="bg-sky-200/50 relative -bottom-6 px-4 py-1 text-sky-600 max-w-fit flex gap-2 items-center-safe text-xs rounded-2xl">
              <RiIssuesReopenLine size={15} />
              {item.posted_by_label}
            </p>
          </div>
          <img
            src={item.company_logo.length > 0 ? item.company_logo : office}
            onError={(e) => {
              e.target.src = office;
            }}
            alt={item.company_name}
            width={50}
            className="opacity-50 max-h-fit bg-[#f0f6ff] p-3 rounded-lg shadow-2xs inset-shadow-2xs shadow-gray-400/30"
          />
        </div>
      ))}
    </>
  );
}
