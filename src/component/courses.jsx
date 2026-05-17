import { useState } from "react";

export default function Courses() {
  const [isActiveId, setIsactiveId] = useState(null);
  const handleToggle = (idx) => {
    setIsactiveId(isActiveId === idx ? null : idx);
  };

  return (
    <>
      <div className="bg-[#ededed] py-10 p-5 hidden lg:block">
        <div>
          <h1 className="font-semibold text-2xl">Internship by Places</h1>
          <div className="flex my-5 gap-3 flex-wrap">
            <p className="border-r border-r-gray-600/30 pr-5">
              Internship in Bangalore
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Internship in Delhi
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Internships in Hyderabad
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Internship in Mumbai
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Internship in Chennai
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Internship in Pune
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Internship in Kolkata
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Internship in Gurgaon
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Work From Home Internships
            </p>
            <p className="pr-5">View all internship</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">Internship by Stream</h1>
          <div className="flex my-5 gap-3 flex-wrap">
            <p className="border-r border-r-gray-600/30 pr-5">
              Computer Science Internship
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Electronics Internship
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Mechanical Internship
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Civil Internship
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Marketing Internship
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Chemical Internship
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Finance Internship
            </p>
            <p className="pr-5">View all internship</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">Jobs by Places</h1>
          <div className="flex my-5 gap-3 flex-wrap">
            <p className="border-r border-r-gray-600/30 pr-5">
              Jobs in Bangalore
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">Jobs in Delhi</p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Jobs in Hyderabad
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Jobs in Gurgaon
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Jobs in Kolkata
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">Jobs in Mumbai</p>
            <p className="border-r border-r-gray-600/30 pr-5">Jobs in Pune</p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Jobs in Chennai
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">Jobs in Noida</p>
            <p className="pr-5">View all jobs</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">Jobs by Type</h1>
          <div className="flex my-5 gap-3 flex-wrap">
            <p className="border-r border-r-gray-600/30 pr-5">
              Data Entry jobs
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Content writing jobs
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Digital Marketing jobs
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Data Science jobs
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">
              Cyber Security jobs
            </p>
            <p className="border-r border-r-gray-600/30 pr-5">Pharma jobs</p>
            <p className="border-r border-r-gray-600/30 pr-5">Teaching jobs</p>
            <p className="border-r border-r-gray-600/30 pr-5">HR jobs</p>
            <p className="border-r border-r-gray-600/30 pr-5">MBA jobs</p>
            <p className="pr-5">View all jobs</p>
          </div>
        </div>
      </div>
      <div className="block lg:hidden bg-[#ededed] py-10 p-5">
        <div className="mb-5 pb-2.5 border-b border-b-gray-600/30">
          <div onClick={() => handleToggle(1)} className="flex justify-between">
            <h1 className="font-semibold text-2xl">Internship by Places</h1>
            <span
              className={`text-sky-500 text-2xl transform transition-transform duration-300 ${isActiveId === 1 ? "rotate-180" : "rotate-0"}`}
            >
              {isActiveId === 1 ? "-" : "+"}
            </span>
          </div>
          {isActiveId === 1 && (
            <div className="flex flex-col my-5 gap-3">
              <p className="pr-5">Internship in Bangalore</p>
              <p className="pr-5">Internship in Delhi</p>
              <p className="pr-5">Internships in Hyderabad</p>
              <p className="pr-5">Internship in Mumbai</p>
              <p className="pr-5">Internship in Chennai</p>
              <p className="pr-5">Internship in Pune</p>
              <p className="pr-5">Internship in Kolkata</p>
              <p className="pr-5">Internship in Gurgaon</p>
              <p className="pr-5">Work From Home Internships</p>
              <p className="pr-5 underline cursor-pointer">View all internship</p>
            </div>
          )}
        </div>
        <div className="mb-5 pb-2.5 border-b border-b-gray-600/30">
          <div onClick={() => handleToggle(2)} className="flex justify-between">
            <h1 className="font-semibold text-2xl">Internship by Stream</h1>
            <span
              className={`text-sky-500 text-2xl transform transition-transform duration-300 ${isActiveId === 2 ? "rotate-180" : "rotate-0"}`}
            >
              {isActiveId === 2 ? "-" : "+"}
            </span>
          </div>
          {isActiveId === 2 && (
            <div className="flex flex-col my-5 gap-3">
              <p className="pr-5">Computer Science Internship</p>
              <p className="pr-5">Electronics Internship</p>
              <p className="pr-5">Mechanical Internship</p>
              <p className="pr-5">Civil Internship</p>
              <p className="pr-5">Marketing Internship</p>
              <p className="pr-5">Chemical Internship</p>
              <p className="pr-5">Finance Internship</p>
              <p className="pr-5 underline cursor-pointer">View all internship</p>
            </div>
          )}
        </div>
        <div className="mb-5 pb-2.5 border-b border-b-gray-600/30">
          <div onClick={() => handleToggle(3)} className="flex justify-between">
            <h1 className="font-semibold text-2xl">Jobs by Places</h1>
            <span
              className={`text-sky-500 text-2xl transform transition-transform duration-300 ${isActiveId === 3 ? "rotate-180" : "rotate-0"}`}
            >
              {isActiveId === 3 ? "-" : "+"}
            </span>
          </div>
          {isActiveId === 3 && (
            <div className="flex my-5 gap-3 flex-col">
              <p className="pr-5">Jobs in Bangalore</p>
              <p className="pr-5">Jobs in Delhi</p>
              <p className="pr-5">Jobs in Hyderabad</p>
              <p className="pr-5">Jobs in Gurgaon</p>
              <p className="pr-5">Jobs in Kolkata</p>
              <p className="pr-5">Jobs in Mumbai</p>
              <p className="pr-5">Jobs in Pune</p>
              <p className="pr-5">Jobs in Chennai</p>
              <p className="pr-5">Jobs in Noida</p>
              <p className="pr-5 underline cursor-pointer">View all jobs</p>
            </div>
          )}
        </div>
        <div>
          <div onClick={() => handleToggle(4)} className="flex justify-between">
            <h1 className="font-semibold text-2xl">Jobs by Type</h1>
            <span
              className={`text-sky-500 text-2xl transform transition-transform duration-300 ${isActiveId === 4 ? "rotate-180" : "rotate-0"}`}
            >
              {isActiveId === 4 ? "-" : "+"}
            </span>
          </div>
          {isActiveId === 4 && (
            <div className="flex my-5 gap-3 flex-col">
              <p className="pr-5">Data Entry jobs</p>
              <p className="pr-5">Content writing jobs</p>
              <p className="pr-5">Digital Marketing jobs</p>
              <p className="pr-5">Data Science jobs</p>
              <p className="pr-5">Cyber Security jobs</p>
              <p className="pr-5">Pharma jobs</p>
              <p className="pr-5">Teaching jobs</p>
              <p className="pr-5">HR jobs</p>
              <p className="pr-5">MBA jobs</p>
              <p className="pr-5 underline cursor-pointer">View all jobs</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
