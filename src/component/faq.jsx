import { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "@remixicon/react";

export default function Faq() {
  const [showAccordion, setShowAccordion] = useState(true);
  const [isActiveId, setIsactiveId] = useState(null);

  const accordionData = [
    {
      title:
        "Q. How do I search for internship in my preferred category/profile?",
      content: (<div>Click <a href="#" className="text-sky-500 underline">here</a> if you are looking for internships. Next, update your preferred profile or location on the web page and use relevant filters to find internships as per your preference.</div>),
    },
    {
      title: "Q. How can I apply for an internship on internshala?",
      content: (<div>
        You can apply for an internship on Internshala using the following steps-
              <ul className="list-disc ml-5 my-2 space-y-2">
                <li>
                  Click on 'View Details' to get details about the company and
                  the profile.
                </li>
                <li>
                  Go through the details thoroughly and apply for internships
                  where your profile matches the requirements of the company.
                </li>
                <li>
                  Click on 'Apply Now' and follow the steps to submit your
                  application.
                </li>
              </ul>
            If you are not registered on Internshala, register yourself today to find your dream internship.
      </div>),
    },
    {
      title: "Q. Do I need to pay for an internship on internshala?",
      content:
        "Absolutely not! Internshala is a free platform. You don't have to pay anything to apply for internships on Internshala.",
    },
    {
      title: "Q. What all internships are available on internshala?",
      content: (<div>You can find 45,000+ internships, <a href="#" className="text-sky-500 underline">work from home internships</a> and <a href="#" className="text-sky-500 underline">part time internships</a> in your preferred location or profile on Internshala.</div>),
    },
    {
      title: "Q. Are there any courses that offer a placement?",
      content:(<div>
        You can check out the following courses for placement -
              <ul className="list-disc ml-5 my-2 space-y-2">
                <li>
                  <a href="#">Digital Marketing course with placement</a>
                </li>
                <li>
                  <a href="#">Data Science course with placement</a>
                </li>
                <li>
                  <a href="#">Full Stack Developer course with placement</a>
                </li>
                <li>
                  <a href="#">Product Management course with placement</a>
                </li>
                <li>
                  <a href="#">UI UX Design course with placement</a>
                </li>
                <li>
                  <a href="#">HR Course with placement</a>
                </li>
                <li>
                  <a href="#">Electric Vehicle course with placement</a>
                </li>
                <li>
                  <a href="#">Banking Sales course with placement</a>
                </li>
                <li>
                  <a href="#">Software Testing course with placement</a>
                </li>
              </ul>
      </div>),
    },
    {
      title: "Q.How do I get certified online?",
      content:(<div>
        Internshala offers a number of certified courses to improve your skill set. Check them out here -
              <ul className="list-disc ml-5 my-2 space-y-2">
                <li>
                  <a href="#">Web Development Course</a>
                </li>
                <li>
                  <a href="#">Python Course</a>
                </li>
                <li>
                  <a href="#">Ethical Hacking Course</a>
                </li>
                <li>
                  <a href="#">Java Course</a>
                </li>
                <li>
                  <a href="#">Digital Marketing Course</a>
                </li>
                <li>
                  <a href="#">Data Science Course</a>
                </li>
                <li>
                  <a href="#">Tally Course</a>
                </li>
                <li>
                  <a href="#">Machine Learning Course</a>
                </li>
                <li>
                  <a href="#">UI UX Design Course</a>
                </li>
              </ul>
      </div>),
    },
  ];


  const toggelActiveIdx = (idx) => {
    setIsactiveId(isActiveId === idx ? null : idx);
  };

  return (
    <>
      <div className="flex flex-col items-center-safe my-10 w-[75%] mx-auto">


        <div onClick={() => setShowAccordion(!showAccordion)} className="flex border-2 max-w-fit text-sky-500 cursor-pointer mb-15 py-3 px-5 rounded-lg border-sky-500">
          <h1>Frequently asked questions</h1>
          {showAccordion ? <RiArrowUpSLine /> :
          <RiArrowDownSLine />}
        </div>


        {showAccordion && (
          <div className="w-full space-y-2 text-gray-500">
            {accordionData.map((item, idx) => {
                const isOpen = isActiveId === idx
                return (
              <div key={idx} className="border-b border-b-gray-400/10 last-of-type:border-b-0">
                <div
                  className="accordion-title flex justify-between py-3 cursor-pointer"
                  onClick={() => toggelActiveIdx(idx)}
                >
                  <div>{item.title}</div>
                  <span className={`text-sky-500 text-2xl transform transition-transform duration-300 ${isOpen ? 'rotate-180': 'rotate-0'}`}>{isOpen ? "-" : "+"}</span>
                </div>
                {isOpen && <div className="pt-2 pb-4">{item.content}</div>}
              </div>
            )
            })}
          </div>
        )}
      </div>
    </>
  );
}
