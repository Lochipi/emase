import Image from "next/image";
// import profile from "../../../public/image/profile.jpg";

function About() {
  return (
    <div
      id="about"
      className="min-h-[90vh] flex flex-col justify-start items-center h-full w-full"
    >
      <h2 className="text-3xl text-orange-700 border-b-4 border-cyan-600 font-bold">
        About
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl text-gray-500">
            Hello, Nice to meet you. Please take a look around!
          </h2>
          <Image
            src="/image/profile.jpg"
            alt="profile image"
            height={300}
            width={500}
            priority
            className="object-cover h-[400px] w-[100%] rounded-lg mt-4"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 items-center text-gray-300">
          <p className="sm:text-sm">
            You can call me Emmett. I was raised in Lodwar, Northern Kenya. I
            love doing things such as reading books, writing, listening to
            music, singing, and travelling. It&apos;s the simple pleasures in life
            that bring me the most joy.
          </p>
          <p className="md:py-4 sm:text-sm">
            I am currently in my final year as a student of Computer Software
            Engineering at Murang&apos;a University of Technology. My field of
            interest is web development specializing in Front-end Engineering,
            but I am also open to trying different things.
          </p>
          <p className="sm:text-sm">
            Through various trainings and internship over the years, I have
            gained valuable experience that has enhanced my skills. I am
            fascinated by the field of technology and enjoy exploring its
            various aspects.
          </p>
          <p className="md:py-4 sm:text-sm">
            I would be thrilled to hear from you, so please don&apos;t hesitate to
            connect with me via my social media channels!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
