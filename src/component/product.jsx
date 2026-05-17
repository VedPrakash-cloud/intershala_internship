import { useState } from "react";
import useFetch from "./useFetch";
import Cards from "./cards";
import Filter from "./FilterSection/filter";
import {RiFilterLine, RiCloseLine} from "@remixicon/react"

export default function Products() {
  const { loading, data, error } = useFetch("https://internshala.com/hiring/search");

  
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(0);
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <p className="text-center h-dvh flex justify-center-safe items-center-safe text-2xl text-[#4696c2]">
        Loading...
      </p>
    );
  }
  
  if (error) {
    return (
      <p className="text-center h-dvh flex justify-center-safe items-center-safe text-2xl text-[#ff2121]">
        {error}...
      </p>
    );
  }

  const intershipObject = data?.internships_meta;
  const internshipsArray = intershipObject ? Object.values(intershipObject) : [];

  
  const filteredInternships = internshipsArray.filter((item) => {
    
    if (!item) return false;

    
    const itemProfile = item.profile_name || "";
    const matchesProfile = profile
      ? itemProfile.toLowerCase().includes(profile.toLowerCase())
      : true;

    
    const locations = item.location_names || [];
    const matchesLocation = location
      ? locations.some((loc) => loc && loc.toLowerCase().includes(location.toLowerCase()))
      : true;

    
    const actualMinStipend = salary * 1000;
    const itemStipend = item.stipend?.salaryValue1 || 0;
    const matchesSalary = itemStipend >= actualMinStipend;

    
    const itemDurationWeeksOrMonths = item.duration ? parseInt(item.duration) : 0;
    const filterDurationNumber = duration ? parseInt(duration) : 0;
    const matchesDuration = duration
      ? itemDurationWeeksOrMonths <= filterDurationNumber
      : true;

    return matchesProfile && matchesLocation && matchesSalary && matchesDuration;
  });

  return (
    <>
      <div className="relative mx-5 mt-25 lg:mt-35 lg:mx-35">
        <div onClick={()=> setIsModalOpen(true)} className="lg:hidden heading flex items-center-safe gap-2 border max-w-fit px-5 py-2 cursor-pointer active:scale-95 shadow-md shadow-gray-600/30 rounded-full">
        <RiFilterLine size={16} className="text-sky-500" />
        <h1>Filters</h1>
      </div>
        <div className="text-center lg:text-right w-full lg:w-3/4 py-5 mb-5">
          <h1 className="font-semibold text-2xl">
            {filteredInternships.length} Total Internships
          </h1>
          <p className="text-xs mt-5">Latest summer Internships in India</p>
        </div>
        <div id="main-content" className="flex gap-5">
          <div className="xl:w-3/6 h-dvh bg-white rounded-2xl p-5 sticky top-24 hidden lg:block">
            <Filter
              profile={profile}
              setProfile={setProfile}
              location={location}
              setLocation={setLocation}
              salary={salary}
              setSalary={setSalary}
              date={date}
              setDate={setDate}
              duration={duration}
              setDuration={setDuration}
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <Cards data={filteredInternships} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-0 sm:p-4">

          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl z-10 animate-in slide-in-from-bottom duration-300 overflow-y-auto max-h-[90vh]">
            
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-lg font-bold text-gray-800">Filter Internships</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <RiCloseLine size={24} className="text-gray-500" />
              </button>
            </div>

            <Filter
              profile={profile} setProfile={setProfile}
              location={location} setLocation={setLocation}
              salary={salary} setSalary={setSalary}
              date={date} setDate={setDate}
              duration={duration} setDuration={setDuration}
            />

            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full mt-15 py-3 bg-[#008BDC] text-white rounded-lg font-semibold shadow-md active:scale-98 transition-transform cursor-pointer text-center"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
}