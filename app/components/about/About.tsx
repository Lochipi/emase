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
            quality={100}
            placeholder="blur"
            blurDataURL="/image/profile.jpg"
            className="object-cover h-[400px] w-[100%] rounded-lg mt-4"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 items-center text-gray-300">
          <p className="sm:text-md">
            You can call me Emmett. I was raised in Lodwar, Northern Kenya. I
            love doing things such as reading books, writing, listening to
            music, singing, and travelling. It&apos;s the simple pleasures in
            life that bring me the most joy.
          </p>
          <p className="md:py-4 sm:text-md">
            Machine Learning Competition, SSA <br />I am delighted to share that
            I participated in a Machine Learning competition organized by the{" "}
            <span className="text-orange-400">SSA</span>. It was an incredible
            experience where I had the opportunity to showcase my skills and
            knowledge in the field of Machine Learning.
          </p>
          <p className="sm:text-md">
            I am an online writer, I create content for different platforms, you
            can check them out on{" "}
            <span>
              <a
                href="#"
                className="hover:text-underline hover:text-blue-500 hover:underline"
              >
                Hashnode
              </a>
            </span>{" "}
            and{" "}
            <span>
              <a
                href="#"
                className="hover:text-underline hover:text-blue-500 hover:underline"
              >
                Medium
              </a>
            </span>
            . I major my content on the web and data areas.
          </p>
          <p className="md:py-4 sm:text-md">
            I would be thrilled to hear from you, so please don&apos;t hesitate
            to connect with me via my social media channels!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
