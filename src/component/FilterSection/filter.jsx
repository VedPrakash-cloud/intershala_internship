import { RiFilterLine } from "@remixicon/react";
import { useState } from "react";

export default function Filter({profile, setProfile, location, setLocation, salary, setSalary, date, setDate, duration, setDuration}) {
  const [clear, setClear] = useState(true);

const handleStipend = (val)=>{
    
    setSalary(val)
}

  const handleClear = () => {
    setProfile("");
    setLocation("");
    setSalary(0);
    setDate("");
    setDuration("");
    setClear(!clear);
  };

  return (
    <>
      <div className="heading flex justify-center-safe items-center-safe">
        <RiFilterLine size={16} className="text-sky-500" />
        <h1>Filters</h1>
      </div>
      <div className="relative filter-area flex flex-col">
        <label htmlFor="profile">Profile</label>
        <input
          type="text"
          id="profile"
          placeholder="e.g. Marketing"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          className="p-2 border border-gray-300 rounded-sm my-2 outline-none"
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="e.g. Delhi"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded-sm my-2 outline-none"
        />
        <p className="my-2">Desired minimum monthly stipend (₹)</p>
        <input
          type="range"
          id="salary"
          min="0"
          max="10"
          step="2"
          value={salary}
          onChange={(e) => handleStipend(parseInt(e.target.value))}
          className="w-full h-1 bg-gray-200 outline-none rounded-lg appearance-none cursor-pointer my-2 accent-[#008BDC] custom-slider"
          style={{
            backgroundImage: `linear-gradient(to right, #e5e7eb ${salary * 10}%, #008BDC ${salary * 10}%)`,
          }}
        />
        <div className="flex justify-between px-1 text-gray-400 text-base">
          <span>0</span><span>2K</span><span>4K</span><span>6K</span><span>8K</span><span>10K</span>
        </div>

        <label htmlFor="startDate" className="my-2">
          Starting from (or after)
        </label>
        <input
          type="date"
          id="startDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border border-gray-300 rounded-sm my-2 outline-none"
        />
        <label htmlFor="duration" className="my-2">
          Max. duration (months)
        </label>
        <select
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="p-2 border border-gray-300 rounded-sm my-2 outline-none"
        >
          <option value="" disabled hidden>
            Choose duration
          </option>
          <option value="1 month">1 month</option>
          <option value="2 month">2 month</option>
          <option value="3 month">3 month</option>
          <option value="4 month">4 month</option>
          <option value="6 month">6 month</option>
          <option value="12 month">12 month</option>
          <option value="24 month">24 month</option>
          <option value="36 month">36 month</option>
        </select>
        <input
          type="button"
          value="ClearAll"
          onClick={handleClear}
          className="absolute right-0 -bottom-10 mt-2 text-sky-500 cursor-pointer outline-none max-w-fit"
        />
      </div>
    </>
  );
}
