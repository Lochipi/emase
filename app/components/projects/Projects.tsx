import Image from "next/image";
import Link from "next/link";
import projectsimg from "@/assets/projectsimg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = projectsimg.map((project) => (
    <div key={project.id} className="border border-gray-500 mt-4 p-4">
      <div className="relative">
        <Image
          className="mx-auto cursor-pointer transition-transform duration-800 transform-gpu hover:scale-105"
          src={project.image}
          width={300}
          height={300}
          alt="project image"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-2 text-cyan-400">
          {project.name}
        </h1>
        <p className="text-cyan-200">{project.description}</p>
      </div>
      <div>
        {/* <div className="p-2">
          <Link href="" className="flex gap-2 ">
            {project.tags.map((item: string) => {
              return (
                <span
                  key={item}
                  className="bg-cyan-400 text-gray-900 px-2 rounded-lg flex-wrap"
                >
                  {item}
                </span>
              );
            })}
          </Link>
        </div> */}
        <div className="flex gap-2 mt-2">
          <Link
            href={project.liveDemo}
            className="py-2 border inline-block rounded  px-4"
            target="_blank"
          >
            <span className="flex items-center justify-center gap-2">
              Demo <FaExternalLinkAlt className="inline-block" />
            </span>
          </Link>

          <Link
            href={project.github}
            className="py-2 border inline-block rounded px-4"
            target="_blank"
          >
            <span className="flex items-center justify-center gap-2">
              Code <FaGithub className="inline-block" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div id="projects" className="min-h-screen flex flex-col justify-center">
      <div className="text-center">
        <h2 className="text-3xl inline-block text-orange-700 border-b-4 border-cyan-600 font-bold ">
          Projects
        </h2>
        <p className="text-start text-2xl text-gray-300">
          Some of the Cool stuffs I've built
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 ">
        {projects}
      </div>
    </div>
  );
};

export default Projects;
