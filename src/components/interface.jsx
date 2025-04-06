import { motion, useScroll } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { ValidationError, useForm } from "@formspree/react";
import { useRef } from "react";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <ExperienceAndEducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Hla Htoo</span>
      </h1>
      <motion.p
        className="text-lg text-black-400 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        From constructing infrastructures to developing interfaces,
        <br />I build full-stack web apps that are smart,
        <br />
        scalable, and impactful.
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "React",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Bun",
    level: 80,
  },
  {
    title: "Nextjs",
    level: 60,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 20,
  },
];
const languages = [
  {
    title: "MongoDB",
    level: 80,
  },
  {
    title: "MySQL",
    level: 70,
  },
  {
    title: "PostgreSQL",
    level: 60,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">
            Databases
          </h2>
          <div className="mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="mb-6 last:mb-0 flex items-start gap-6 relative">
      {/* Dot */}
      <div className="w-3 h-3 bg-indigo-500 rounded-full absolute -left-5 top-2.5" />
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-black">
          {position}
          <a
            href={`${companyLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 ml-2"
          >
            @{company}
          </a>
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">
          {time} | {address}
        </p>
        <p className="text-md text-gray-700 mt-2 leading-relaxed">{work}</p>
      </div>
    </li>
  );
};

const EducationDetail = ({ degree, school, schoolLink, time, address }) => {
  return (
    <li className="mb-6 last:mb-0 flex items-start gap-6 relative">
      {/* Dot */}
      <div className="w-3 h-3 bg-indigo-500 rounded-full absolute -left-5 top-2.5" />
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-black">
          {degree}
          <a
            href={`https://${schoolLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 ml-2"
          >
            @{school}
          </a>
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">
          {time} | {address}
        </p>
      </div>
    </li>
  );
};

const ExperienceAndEducationSection = () => {
  return (
    <Section>
      <div className="w-full py-20">
        <h2 className="font-bold text-5xl md:text-7xl text-black mb-20 text-center">
          Experience & Education
        </h2>

        {/* EXPERIENCE */}
        <div className="w-[90%] md:w-[75%] mx-auto mb-20">
          <h3 className="text-2xl font-semibold text-black mb-6">Experience</h3>

          <div className="relative pl-10">
            {/* Vertical Line for Experience */}
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-full" />
            <ul className="ml-4">
              <Details
                position="Research Assistant"
                company="Northeastern University"
                companyLink="https://www.northeastern.edu"
                time="May 2024 - Present"
                address="Boston, Massachusetts, United States"
                work="Led the development of a 3D algorithm-learning game using Three.js and MongoDB, implemented data analytics tools for instructors to track student performance, and co-authored a research paper on gamification's educational impact."
              />
              <Details
                position="Water Resources Engineer"
                company="Stetson Engineers Inc."
                companyLink="https://www.stetsonengineers.com/"
                time="Feb 2023 - Jan 2025"
                address="San Rafael, California, United States"
                work="Designed pipelines and storage tanks in Civil 3D, prepared cost estimates, and reviewed contracts and specifications to ensure efficient water infrastructure and regulatory compliance."
              />
              <Details
                position="Geotechnical Engineer"
                company="Lahlaf Geotechnical Consulting, Inc."
                companyLink="https://www.lgcinc.net/"
                time="Feb 2022 - Nov 2022"
                address="Billerica, Massachusetts, United States"
                work="Performed field investigations, laboratory testing, and geotechnical analyses to support foundation and earthwork projects, while preparing technical reports, reviewing submittals/RFIs, and ensuring compliance through on-site construction observations."
              />
              <Details
                position="Civil Engineer / Assistant Project Manager"
                company="MassDOT"
                companyLink="https://www.mass.gov/orgs/massachusetts-department-of-transportation"
                time="Aug 2019 - Feb 2022"
                address="Boston, Massachusetts, United States"
                work="Successfully led two $5M+ bridge reconstruction projects in Boston, delivering them under budget with at least 3% cost savings and an 87% on-time milestone rate through strategic planning and efficient resource management."
              />
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="w-[90%] md:w-[75%] mx-auto">
          <h3 className="text-2xl font-semibold text-black mb-6">Education</h3>

          <div className="relative pl-10">
            {/* Vertical Line for Education */}
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-full" />
            <ul className="ml-4">
              <EducationDetail
                degree="M.S. Computer Science"
                school="Northeastern University"
                schoolLink="www.northeastern.edu"
                time="2023 - 2025"
                address="Boston, MA"
              />
              <EducationDetail
                degree="B.S. Civil Engineering"
                school="University of Massachusetts Lowell"
                schoolLink="www.uml.edu"
                time="2015 - 2019"
                address="Lowell, MA"
              />
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex mb-[-15%] w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xnnpqapo");
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-gray-900 text-center">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* ✅ Use htmlFor instead of for */}
            <label
              htmlFor="name"
              className="font-medium text-gray-900 block mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />

            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="message"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />

            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};
