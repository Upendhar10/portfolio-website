import React from "react";

const Academics = () => {
  return (
    <div className="w-[100%] ">
      <ul id="timeline">
        <li>
          <div className="schoo">
            <h5>B.Tech - 2022</h5>
            <h6>Gokaraju Rangaraju Institute of Engineering and Technology</h6>
            <p>CGPA - 7.1</p>
          </div>
        </li>
        <li>
          <div className="school">
            <h5>Diploma - 2019</h5>
            <h6>Sanjay Gandhi Memorial Govt Polytechnic</h6>
            <p>CGPA - 7.5</p>
          </div>
        </li>
        <li>
          <div className="school">
            <h5>High School - 2016</h5>
            <h6> Bhavya's Grammar High School</h6>
            <p>CGPA - 8.8</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="w-[100%]">
      <ul id="timeline">
        <li>
          <div className="Experience">
            <h5>Intern : Oct 2021 - Dec 2021 </h5>
            <h6>AICTE - EduSkills</h6>
            <p>AWS Cloud </p>
          </div>
        </li>
        <li>
          <div className="Experience">
            <h5>Intern : Nov 2018 - April 2019 </h5>
            <h6>S.P Technologies</h6>
            <p>Android Development</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

const Timeline = () => {
  return (
    <>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="w-[2.8px] bg-gray-700 absolute border-opacity-50 border-gray-700 h-[74%] border left-[50%] top-[12%]"></div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline ">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 rounded-full "></div>
            <div className="order-1  rounded-lg shadow-md w-5/12 px-4 md:px-10 py-4 bg-white">
              <h3 className="mb-2 font-bold text-gray-800 text-sm sm:text-xl">
                B.Tech - CSE : 2022
              </h3>
              <h6
                className="mb-1 text-sm sm:text-base md:hidden"
                title="Gokaraju Rangaraju Institute of Engineering and Technology"
              >
                G.R.I.E.T
              </h6>
              <h6 className="hidden mb-1 text-sm sm:text-base md:block">
                Gokaraju Rangaraju Institute of Engineering and Technology
              </h6>
              <p className="text-sm sm:text-base">CGPA - 7.1</p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 rounded-full"></div>
            <div className="order-1  rounded-lg shadow-md w-5/12 px-4 md:px-10 py-4 bg-white">
              <h3 className="mb-2 font-bold text-gray-800 text-sm sm:text-xl">
                Intern : Oct 2021 - Dec 2021
              </h3>
              <h6 className="mb-1 text-sm sm:text-base">AICTE - EduSkills</h6>
              <p className="text-sm sm:text-base">AWS Cloud </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 rounded-full"></div>
            <div className="order-1  rounded-lg shadow-md w-5/12 px-4 md:px-10 py-4 bg-white">
              <h3 className="mb-2 font-bold text-gray-800  text-sm sm:text-xl">
                Diploma - CME : 2019
              </h3>
              <h6
                className="mb-1 text-sm sm:text-base md:hidden"
                title="Sanjay Gandhi memorial Govt Polytechnic"
              >
                S.G.M G.P.T
              </h6>
              <h6 className="hidden mb-1 text-sm sm:text-base md:block">
                Sanjay Gandhi Memorial Govt Polytechnic
              </h6>
              <p className="text-sm sm:text-base">CGPA - 7.5</p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 rounded-full"></div>
            <div className="order-1 rounded-lg shadow-md w-5/12 px-4 md:px-10 py-4 bg-white">
              <h3 className="mb-2 font-bold text-gray-800 text-sm sm:text-xl">
                Intern : Nov 2018 - April 2019{" "}
              </h3>
              <h6 className="mb-1 text-sm sm:text-base">S.P Technologies</h6>
              <p className="text-sm sm:text-base">Android Development</p>
            </div>
          </div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-none w-6 h-6 rounded-full"></div>
            <div className="order-1  rounded-lg shadow-md w-5/12 px-4 md:px-10 py-4 bg-white">
              <h3 className="mb-2 font-bold text-gray-800 text-sm sm:text-xl ">
                High School - SSC : 2016
              </h3>
              <h6
                className="mb-1 text-sm sm:text-base md:hidden"
                title="Sanjay Gandhi memorial Govt Polytechnic"
              >
                B.G.H.S
              </h6>
              <h6 className="hidden mb-1 text-sm sm:text-base md:block">
                Bhavya's Grammar High School
              </h6>
              <p className="text-sm sm:text-base">CGPA - 8.8</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Qualification = () => {
  return (
    <div className="my-10" id="Qualification">
      <p className="font-bold text-3xl text-center my-4 underline decoration-dashed underline-offset-8">
        Qualification
      </p>
      <Timeline />
    </div>
  );
};

export default Qualification;
