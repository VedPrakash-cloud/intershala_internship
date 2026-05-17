import starRating from "../assets/rating.png";
import playStore from "../assets/playstore.png";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";
import review5 from "../assets/review5.png";
import review6 from "../assets/review6.png";
import review7 from "../assets/review7.png";
import review8 from "../assets/review8.png";
import { RiArrowRightUpLongLine, RiDoubleQuotesL } from "@remixicon/react";


export default function StarRating() {
  return (
    <div className="grid md:flex items-center-safe bg-[#edf5ff] py-15 lg:px-5 overflow-hidden">
      <div className="w-2/5 m-10">
        <RiDoubleQuotesL
          size={60}
          className="bg-sky-200 rounded-full text-[#006bc2] p-2"
        />
        <h1 className="my-5 text-2xl/9 lg:text-4xl/10 text-wrap font-semibold w-75 lg:w-full">
          Join the pool of 21Mn+ students and get started with your career
        </h1>
        <p className="uppercase my-5">play store rating</p>
        <div className="flex items-center-safe gap-2 mb-5">
          <p className="text-5xl font-semibold text-[#006bc2]">4.4</p>
          <img src={starRating} alt="star rating" />
        </div>
        <div className="flex items-center-safe gap-2 text-white font-semibold bg-[#212121] max-w-fit px-5 py-2 rounded-full">
          <img src={playStore} alt="playstore" />
          <p>Get It on Google Play</p>
          <a href="#">
            <RiArrowRightUpLongLine />
          </a>
        </div>
      </div>

      <div className="w-[70%] px-4 py-8">
        <div className="flex gap-6 no-scrollbar overflow-x-auto snap-x snap-mandatory pb-4">
          <div className="flex flex-col text-left justify-between h-80 min-w-[320px] md:min-w-[384px] max-w-sm rounded-3xl bg-white p-6 shadow-md border border-gray-100 snap-center shrink-0">
            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                Must-have app for students
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                I got my first internship from here. Internshala is must for
                career oriented students. This app has a lot of opportunities
                for every kind of students.
              </p>
            </div>
            <div className="mt-4">
              <img
                src={review1}
                alt="review1"
                className="h-12 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col text-left justify-between h-80 min-w-[320px] md:min-w-[384px] max-w-sm rounded-3xl bg-white p-6 shadow-md border border-gray-100 snap-center shrink-0">
            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                I landed a job at Amazon
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                I applied to Amazon and got the job! It was my dream. I wanted
                to get in tech but I was from electrical background. My friend
                suggested Data Science Placement Guarantee Course...
              </p>
            </div>
            <div className="mt-4">
              <img
                src={review2}
                alt="review2"
                className="h-12 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col text-left justify-between h-80 min-w-[320px] md:min-w-[384px] max-w-sm rounded-3xl bg-white p-6 shadow-md border border-gray-100 snap-center shrink-0">
            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                Placement guarantee works
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                100% guarantee de rahe the, mujhe 100% doubt tha ki placement
                hogi bhi ya nahi. Truth is I got a placement. I didn't have any
                idea of how to enter corporate, what kind of job would be a good
                fit for me and where to start. In the placement guarantee
                course, I learnt so much and even before I completed it, I got
                an internship.
              </p>
            </div>
            <div className="mt-4">
              <img src={review3} alt="review3" style={{ width: "200px" }} />
            </div>
          </div>

          <div className="flex flex-col text-left justify-between h-80 min-w-[320px] md:min-w-[384px] max-w-sm rounded-3xl bg-white p-6 shadow-md border border-gray-100 snap-center shrink-0">
            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                First choice for job search
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                Internshala has helped me get into internships and i have got
                many calls from hirers through internshala. i would be using it
                frequently for my job search and would be my first prioritized
                job search app as it gave me more opportunities to explore.
                would be looking forward for more opportunities.
              </p>
            </div>
            <div className="mt-4">
              <img src={review4} alt="review4" style={{ width: "200px" }} />
            </div>
          </div>

          <div className="flex flex-col text-left justify-between h-80 min-w-[320px] md:min-w-[384px] max-w-sm rounded-3xl bg-white p-6 shadow-md border border-gray-100 snap-center shrink-0">
            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                Great platform for upskilling
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                Internshala is really a great platform to learn skills and the
                team is really helpful. Whenever you drop your problems they
                just resolve within few hours. Really glad to complete this
                course with Internshala Trainings.
              </p>
            </div>
            <div className="mt-4">
              <img src={review5} alt="review5" style={{ width: "200px" }} />
            </div>
          </div>
          

          <div className="flex flex-col text-left justify-between h-80 min-w-[320px] md:min-w-[384px] max-w-sm rounded-3xl bg-white p-6 shadow-md border border-gray-100 snap-center shrink-0">
            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                Got an internship at Flipkart
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                I was getting rejected in my campus placements was so
                disappointed. My professor recommended Internshala's data
                science placement guarantee course. I joined the course and
                learnt data science & machine learning. I also learnt how to
                crack interviews, make a resume, etc. Few months later, I
                secured an internship with Flipkart. It's my first job after
                graduation. The office is huge. I love it here.
              </p>
            </div>
            <div className="mt-4">
              <img src={review6} alt="review6" style={{ width: "200px" }} />
            </div>
          </div>

          <div className="flex flex-col text-left justify-between h-80 min-w-[320px] md:min-w-[384px] max-w-sm rounded-3xl bg-white p-6 shadow-md border border-gray-100 snap-center shrink-0">
            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                Good support and doubt solving
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                If I put placement guarantee aside, the skills & knowledge I
                gained from this course are immense. What stood out for me was
                the quick resolution of my doubts and queries. Internshala gave
                me all the support I needed to restart my career - right from
                sharing placement opportunities to interview preparation.
              </p>
            </div>
            <div className="mt-4">
              <img src={review7} alt="review7" style={{ width: "200px" }} />
            </div>
          </div>

          <div className="flex flex-col text-left justify-between h-80 min-w-[320px] md:min-w-[384px] max-w-sm rounded-3xl bg-white p-6 shadow-md border border-gray-100 snap-center shrink-0">
            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                Got hired for 4 internships
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                Internshala helped me to get me 4 internship in multiple Domains
                and I highly recommend Internshala for students who are looking
                for internships and jobs
              </p>
            </div>
            <div className="mt-4">
              <img src={review8} alt="review8" style={{ width: "200px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
