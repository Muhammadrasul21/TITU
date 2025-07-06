import React from "react";
import event from "../../assets/event.jpg";
import events from "../../assets/events.jpg";

const Home = () => {
  return (
    <div className="flex mt-10">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col"
      >
        <div className="flex gap-4 sm:flex-wrap sm:flex-row flex-col">
          <img src={event} alt="" className="w-[500px]" />
          <img src={events} alt="" className="w-[500px]" />
        </div>
        <p>
          TDIU Andijon fakultetida e’lon qilingan “MISS FACULTY” ko’rik
          tanlovidan va taqdirlash marosimidan foto lavxa.
        </p>
      </div>
    </div>
  );
};

export default Home;
