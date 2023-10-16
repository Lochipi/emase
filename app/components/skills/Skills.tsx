import Image from "next/image";
import data from "../../../assets/data";

const Skills = () => {
  const skills = data.map((skill) => {
    return (
      <div
        key={skill.id}
        className="shadow-md shadow-[#040c16] py-3 hover:scale-110 duration-500 bg-[#000000] max-w-[250px] md:h-[200px] max-h-[200px] cursor-pointer"
      >
        <Image
          className="w-20 mx-auto"
          width={200}
          height={300}
          src={skill.icon}
          alt="icon"
        />
        <p className="my-4 text-center">{skill.name}</p>
      </div>
    );
  });

  return (
    <div
      className="mt-4 min-h-[90vh] flex flex-col items-center justify-center"
      id="skills"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-3xl inline-block text-orange-700 border-b-4 border-cyan-600 font-bold ">
          Skills
        </h2>
      </div>
      <p className="text-center mt-4 text-gray-400">
        These are the skills I have learned and used in my projects.
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 items-center">
        {skills}
      </div>
    </div>
  );
};

export default Skills;
