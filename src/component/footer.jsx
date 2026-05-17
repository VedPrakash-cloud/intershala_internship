import appStore from "../assets/appstore.png";
import {RiInstagramLine, RiTwitterLine, RiYoutubeLine, RiLinkedinLine} from "@remixicon/react"

export default function Footer(){
    return(
        <div className="bg-[#333333] text-white px-5 py-10">
            <div className="top grid lg:flex justify-between w-[80%] lg:font-semibold text-lg">
                <div className="flex flex-col gap-3">
                    <p className="cursor-pointer">About us</p>
                    <p className="cursor-pointer">We're hiring</p>
                    <p className="cursor-pointer">Hire interns for your company</p>
                    <p className="cursor-pointer">Post a Job</p>
                    <p className="cursor-pointer">Competitions</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="cursor-pointer">Team Diary</p>
                    <p className="cursor-pointer">Blog</p>
                    <p className="cursor-pointer">Our Services</p>
                    <p className="cursor-pointer">Free Job Alerts</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="cursor-pointer">Terms & Conditions</p>
                    <p className="cursor-pointer">Privacy</p>
                    <p className="cursor-pointer">Contact us</p>
                    <p className="cursor-pointer">Annual Returns</p>
                    <p className="cursor-pointer">Grievance Redressal</p>
                    <p className="cursor-pointer">Resume Maker</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="cursor-pointer">Sitemap</p>
                    <p className="cursor-pointer">College TPO registration</p>
                    <p className="cursor-pointer">List of Companies</p>
                    <p className="cursor-pointer">Jobs for Women</p>
                </div>
            </div>
            <div className="bottom grid lg:flex justify-between items-end mt-10">
                <div className="socialmedia flex items-center-safe gap-5 pb-2 border-b border-b-gray-500/30 lg:border-0">
                    <div className="appstore">
                        <img src={appStore} alt="App Store" />
                    </div>
                    <div className="flex gap-2">
                        <RiInstagramLine />
                        <RiTwitterLine />
                        <RiYoutubeLine />
                        <RiLinkedinLine />
                    </div>
                </div>
                <div className="copyright text-lg mt-5">
                    <p>&copy; Copyright 2026 Internshala</p>
                    <p>(Scholiverse Educare Private Limited)</p>
                </div>
            </div>
        </div>
    )
}