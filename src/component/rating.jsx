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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function StarRating() {
  return (
    <>
      <div className="flex items-center-safe bg-[#edf5ff] py-15 px-5">
        <div className="w-2/5 border">
          <RiDoubleQuotesL
            size={60}
            className="bg-sky-200 rounded-full text-[#006bc2] p-2"
          />
          <h1 className="my-5 text-4xl/10 font-semibold ">
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
        <div className="w-3/5 border h-96">
          <Carousel>
            <div className="flex flex-col text-left justify-between h-84 w-96 rounded-4xl bg-white p-5">
              <div>
                <h1>Must-have app for students</h1>
                <p>
                  I got my first internship from here. Internshala is must for
                  career oriented students. This app has a lot of opportunities
                  for every kind of students.
                </p>
              </div>
              <img src={review1} alt="review1" style={{width:"200px"}} />
            </div>
            <div>
              <div>
                <h1>I landed a job at Amazon</h1>
                <p>
                  I applied to Amazon and got the job! It was my dream. I wanted
                  to get in tech but I was from electrical background. My friend
                  suggested Data Science Placement Guarantee Course. In the
                  course, I learnt SQL, Python, Tableau & worked on a lot of
                  projects which came in handy in my interviews. I was able to
                  explain the concepts and applications well. The placement team
                  helped me with everything.
                </p>
              </div>
              <img src={review2} alt="review2" />
            </div>
            <div>
              <div>
                <h1>Placement guarantee works</h1>
                <p>
                  100% guarantee de rahe the, mujhe 100% doubt tha ki placement
                  hogi bhi ya nahi. Truth is I got a placement. I didn't have
                  any idea of how to enter corporate, what kind of job would be
                  a good fit for me and where to start. In the placement
                  guarantee course, I learnt so much and even before I completed
                  it, I got an internship.
                </p>
              </div>
              <img src={review3} alt="review3" />
            </div>
            <div>
              <div>
                <h1>First choice for job search</h1>
                <p>
                  Internshala has helped me get into internships and i have got
                  many calls from hirers through internshala. i would be using
                  it frequently for my job search and would be my first
                  prioritized job search app as it gave me more opportunities to
                  explore. would be looking forward for more opportunities.
                </p>
              </div>
              <img src={review4} alt="review4" />
            </div>
            <div>
              <div>
                <h1>Great platform for upskilling</h1>
                <p>
                  Internshala is really a great platform to learn skills and the
                  team is really helpful. Whenever you drop your problems they
                  just resolve within few hours. Really glad to complete this
                  course with Internshala Trainings.
                </p>
              </div>
              <img src={review5} alt="review5" />
            </div>
            <div>
              <div>
                <h1>Got an internship at Flipkart</h1>
                <p>
                  I was getting rejected in my campus placements was so
                  disappointed. My professor recommended Internshala's data
                  science placement guarantee course. I joined the course and
                  learnt data science & machine learning. I also learnt how to
                  crack interviews, make a resume, etc. Few months later, I
                  secured an internship with Flipkart. It's my first job after
                  graduation. The office is huge. I love it here.
                </p>
              </div>
              <img src={review6} alt="review6" />
            </div>
            <div>
              <div>
                <h1>Good support and doubt solving</h1>
                <p>
                  If I put placement guarantee aside, the skills & knowledge I
                  gained from this course are immense. What stood out for me was
                  the quick resolution of my doubts and queries. Internshala
                  gave me all the support I needed to restart my career - right
                  from sharing placement opportunities to interview preparation.
                </p>
              </div>
              <img src={review7} alt="review7" />
            </div>
            <div>
              <div>
                <h1>Got hired for 4 internships</h1>
                <p>
                  Internshala helped me to get me 4 internship in multiple
                  Domains and I highly recommend Internshala for students who
                  are looking for internships and jobs
                </p>
              </div>
              <img src={review8} alt="review8" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
