import Image from "next/image";
import profile from "../../public/image/fetty.jpg";

const page = () => {
  return (
    <div className="max-h-screen flex flex-col justify-center items-center h-full w-full">
      <h2 className="text-3xl text-orange-700 border-b-4 border-cyan-600 font-bold">
        About
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="w-full">
          <h2 className="text-3xl text-right">
            Hello, Nice to meet you. Please take a look around!
          </h2>
          <Image
            src={profile}
            alt="profile image"
            height={500}
            width={500}
            priority
            className="object-cover rounded-lg mt-4"
          />
        </div>
        <div>
          <p>
            You can call me Emmett. I was raised in Lodwar, Northern Kenya. I
            love doing things such as reading books, writing, listening to
            music, singing, and travelling. It's the simple pleasures in life
            that bring me the most joy.
          </p>
          <p className="py-4">
            I am currently in my final year as a student of Computer Software
            Engineering at IMurang'a University of Technology. My field of
            interest is web development specializing in Front-end Engineering,
            but I am also open to trying different things.
          </p>
          <p>
            Through various trainings and internship over the years, I have
            gained valuable experience that has enhanced my skills. I am
            fascinated by the field of technology and enjoy exploring its
            various aspects.
          </p>
          <p className="py-4">
            I would be thrilled to hear from you, so please don't hesitate to
            connect with me via my social media channels!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
