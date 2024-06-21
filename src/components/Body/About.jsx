import React from "react";
import Qualification from "./Qualification";

const Summary = () => {
  return (
    <div className="my-16">
      <p className="font-bold text-3xl text-center  mb-6 underline decoration-dashed underline-offset-8">
        About Me
      </p>
      <p className="indent-10 leading-7 tracking-wide text-justify">
        I am a Passionate Software Engineer with expertise in front-end
        technologies including HTML, CSS, React.js, Bootstrap, and Tailwind CSS,
        backed by proficiency in Java and JavaScript. Experienced in database
        management using MySQL and MongoDB. Skilled in fundamentals of AWS Cloud
        and Version control system Git. Strong communicator with excellent
        problem-solving abilities and effective time management skills.
      </p>
    </div>
  );
};

const Skillset = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-around my-16">
      <div>
        <p className="font-medium text-lg mb-2">Technical Skills</p>
        <div className="border p-2 rounded-lg">
          <div className="flex gap-5 flex-wrap py-2 justify-center">
            <img
              className="h-10"
              src="https://skillicons.dev/icons?i=java,js"
            />
            <img
              className="h-10"
              src="https://skillicons.dev/icons?i=mysql,mongodb"
            />
            <img
              className="h-10"
              src="https://skillicons.dev/icons?i=html,css,react,tailwind,bootstrap"
            />
            <img
              className="h-10"
              src="https://skillicons.dev/icons?i=git,github,vscode,aws"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-medium text-lg mb-2">Soft-skills</p>
        <div className="border p-4 rounded-lg">
          <div className="flex flex-row gap-2 flex-wrap justify-center py-2 ">
            <p className="bg-slate-600 p-2 rounded-2xl text-white">
              Collaboration
            </p>
            <p className="bg-slate-600 p-2 rounded-2xl text-white">
              Adaptability
            </p>
            <p className="bg-slate-600 p-2 rounded-2xl text-white">
              Creativity
            </p>
            <p className="bg-slate-600 p-2 rounded-2xl text-white">
              Problem-solving
            </p>
            <p className="bg-slate-600 p-2 rounded-2xl text-white">
              Critical thinking
            </p>
            <p className="bg-slate-600 p-2 rounded-2xl text-white">
              Time management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="About" className="p-3">
      <Summary />
      <Skillset />
      <Qualification/>
    </div>
  );
};

export default About;
